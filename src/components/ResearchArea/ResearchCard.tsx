import React from 'react';
import { motion } from 'motion/react';
import { ResearchArea } from '../../types/research';

interface ResearchCardProps {
  research: ResearchArea;
  index: number;
  onSelect?: (research: ResearchArea) => void;
}

export const ResearchCard: React.FC<ResearchCardProps> = ({ research, index, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onClick={() => onSelect && onSelect(research)}
      className="group cursor-pointer flex flex-col h-full bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 overflow-hidden"
    >
      {/* Image Container with Hover Overlay in Middle */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-900">
        <img
          src={research.imageUrl}
          alt={research.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Hover overlay showing image name at the middle */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center p-4 text-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span className="text-white font-bold text-xs sm:text-sm px-3 py-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg tracking-wide transform scale-90 group-hover:scale-100 transition-transform duration-300">
            {research.unitName} - {research.title}
          </span>
        </div>
      </div>

      {/* Content: Title & Description */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-base font-bold font-heading text-gray-900 group-hover:text-pink-600 transition-colors mb-2 leading-snug">
            {research.title}
          </h3>
          <p className="text-xs text-gray-600 font-sans leading-relaxed line-clamp-3">
            {research.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ResearchCard;

