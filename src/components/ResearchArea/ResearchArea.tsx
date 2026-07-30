import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, BookOpen, Users, Tag, CheckCircle2, ArrowRight } from 'lucide-react';
import Container from '../Common/Container';

import ResearchCard from './ResearchCard';
import { researchAreasData } from '../../data/research';
import { ResearchArea as ResearchAreaType } from '../../types/research';
import Button from '../Common/Button';

interface ResearchAreaProps {
  onOpenVolunteerModal?: () => void;
}

export const ResearchArea: React.FC<ResearchAreaProps> = ({ onOpenVolunteerModal }) => {
  const [selectedResearch, setSelectedResearch] = useState<ResearchAreaType | null>(null);

  return (
    <section id="research" className="py-20 sm:py-28 bg-gray-50/70 border-y border-gray-100 relative">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-gray-900 tracking-tight">
            Research Area
          </h2>
        </div>

        {/* 5-Column Responsive Grid (Desktop: 5, Tablet: 3, Mobile: 1) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {researchAreasData.map((item, idx) => (
            <ResearchCard
              key={item.id}
              research={item}
              index={idx}
              onSelect={(res) => setSelectedResearch(res)}
            />
          ))}
        </div>
      </Container>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedResearch && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedResearch(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-gray-100 my-8"
            >
              {/* Modal Header Image */}
              <div className="relative h-64 w-full bg-gray-900">
                <img
                  src={selectedResearch.imageUrl}
                  alt={selectedResearch.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/40 to-transparent" />

                <button
                  onClick={() => setSelectedResearch(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
                  aria-label="Close detail modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="px-3 py-1 bg-pink-500 text-white text-xs font-bold rounded-full uppercase tracking-wider mb-2 inline-block">
                    {selectedResearch.unitName}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading">
                    {selectedResearch.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-xs uppercase font-bold text-gray-500 tracking-wider mb-2">
                    Unit Scope & Objective
                  </h4>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-sans">
                    {selectedResearch.description}
                  </p>
                </div>

                {/* Focus Areas */}
                {selectedResearch.focusAreas && (
                  <div>
                    <h4 className="text-xs uppercase font-bold text-gray-500 tracking-wider mb-3">
                      Key Focus Areas
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedResearch.focusAreas.map((fa) => (
                        <div
                          key={fa}
                          className="flex items-center gap-2 p-2.5 rounded-xl bg-pink-50/50 border border-pink-100/60 text-xs font-medium text-gray-800"
                        >
                          <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0" />
                          <span>{fa}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Lead Researcher & Info */}
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-pink-500" />
                    <span>Lead: <strong>{selectedResearch.leadResearcher}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-pink-500" />
                    <span><strong>{selectedResearch.publicationsCount}</strong> Publications</span>
                  </div>
                </div>

                {/* Tags */}
                {selectedResearch.tags && (
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <Tag className="w-4 h-4 text-gray-400" />
                    {selectedResearch.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <div className="pt-4 border-t border-gray-100 flex items-center justify-end gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedResearch(null)}
                  >
                    Close
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      setSelectedResearch(null);
                      if (onOpenVolunteerModal) onOpenVolunteerModal();
                    }}
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Join Unit as Researcher
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ResearchArea;
