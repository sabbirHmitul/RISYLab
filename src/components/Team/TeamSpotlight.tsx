import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Building2 } from 'lucide-react';
import { TeamMember } from '../../types/team';

interface TeamSpotlightProps {
  badge: string;
  title: string;
  members: TeamMember[];
}

export const TeamSpotlight: React.FC<TeamSpotlightProps> = ({ badge, title, members }) => {
  // No details shown on initial load; modal-only details
  const [viewedId, setViewedId] = useState<string | null>(null); // last clicked member id
  const [modalOpen, setModalOpen] = useState(false);
  const [page, setPage] = useState(0);
  const pageSize = 5;

  const start = page * pageSize;
  const end = start + pageSize;
  const paginatedMembers = members.slice(start, end);

  const selected = null;

  const bodyOverflowRef = useRef<string>('');

  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (modalOpen) {
      bodyOverflowRef.current = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = bodyOverflowRef.current || '';
    }
    return () => {
      document.body.style.overflow = bodyOverflowRef.current || '';
    };
  }, [modalOpen]);

  return (
    <div>
      {/* Section label, mirrors the checked "☒" marker from the sketch */}
      <div className="flex items-center gap-3 mb-8">
        <span className="flex items-center justify-center w-6 h-6 rounded-md bg-pink-500 text-white text-xs font-bold shrink-0">
          ✓
        </span>
        <div>
          <span className="text-xs font-semibold tracking-wider text-pink-500 uppercase">{badge}</span>
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 leading-tight">{title}</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 items-start">
        {/* Avatar selector grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {paginatedMembers.map((member) => {
            const isActive = false;
            return (
              <button
                key={member.id}
                type="button"
                onClick={() => {
                  setViewedId(member.id);
                  setModalOpen(true);
                }}
                className={`group relative rounded-3xl overflow-hidden aspect-[4/5] border-2 text-left transition-all duration-300 focus:outline-none ${
                  isActive
                    ? 'border-pink-500 shadow-lg shadow-pink-500/20 scale-[1.02]'
                    : 'border-transparent hover:border-pink-200'
                }`}
              >
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-70 group-hover:opacity-90'
                  }`}
                />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white text-sm font-semibold leading-tight truncate">{member.name}</p>
                  <p className="text-white/70 text-[11px] truncate">{member.role}</p>
                </div>
                {isActive && (
                  <span className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-pink-500 ring-4 ring-pink-500/30" />
                )}
              </button>
            );
          })}
        </div>

        {/* Detail spotlight card */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Showing {start + 1} - {Math.min(end, members.length)} of {members.length}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                className="px-3 py-1 rounded-md bg-white border text-gray-700 disabled:opacity-40"
              >
                Prev
              </button>
              <button
                onClick={() => setPage((p) => (end < members.length ? p + 1 : p))}
                disabled={end >= members.length}
                className="px-3 py-1 rounded-md bg-white border text-gray-700 disabled:opacity-40"
              >
                Next
              </button>
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            {/* Modal for selected member */}
            <AnimatePresence>
              {modalOpen && viewedId && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[999999] flex items-center justify-center p-4"
                    role="dialog"
                    aria-modal="true"
                  >
                    <div
                      className="absolute inset-0 bg-black/60 pointer-events-auto"
                      onClick={() => { setModalOpen(false); setViewedId(null); }}
                    />
                  <motion.div
                    initial={{ scale: 0.98, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.98, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="relative max-w-3xl w-full rounded-2xl bg-white overflow-hidden shadow-2xl border border-gray-100 z-20"
                  >
                    {(() => {
                      const mem = members.find((m) => m.id === viewedId);
                      if (!mem) return null;
                      return (
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/2 h-64 md:h-auto bg-gray-100 overflow-hidden">
                            <img src={mem.imageUrl} alt={`${mem.name} portrait`} className="w-full h-full object-cover" />
                          </div>
                          <div className="p-6 md:w-1/2 flex flex-col justify-between">
                            <div>
                              <div className="flex items-start justify-between">
                                <div>
                                  <h4 className="text-2xl font-bold">{mem.name}</h4>
                                  <p className="text-sm text-pink-600 font-semibold mt-1">{mem.role}</p>
                                  <p className="mt-2 text-sm text-gray-600">{mem.affiliation}</p>
                                </div>
                                <button
                                  onClick={() => { setModalOpen(false); setViewedId(null); }}
                                  className="text-gray-500 hover:text-gray-800 ml-4"
                                  aria-label="Close details"
                                >
                                  <span className="sr-only">Close</span>
                                  ✕
                                </button>
                              </div>

                              <div className="mt-4 flex flex-wrap gap-2">
                                {mem.specialization.map((s) => (
                                  <span key={s} className="px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-xs font-medium border border-pink-100">
                                    {s}
                                  </span>
                                ))}
                              </div>

                              <div className="mt-6">
                                <p className="text-sm text-gray-700">{mem.bio || mem.description || ''}</p>
                              </div>
                            </div>

                            <div className="mt-6 flex items-center gap-3">
                              <a
                                href={mem.scholarUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-pink-600 transition-colors duration-300"
                              >
                                <GraduationCap className="w-4 h-4" />
                                Scholar
                              </a>
                              <a
                                href={mem.profileUrl || '#'}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm text-gray-600 underline"
                              >
                                Full profile
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSpotlight;
