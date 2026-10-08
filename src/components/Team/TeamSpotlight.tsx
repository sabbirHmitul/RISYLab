import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Building2, Linkedin, X } from 'lucide-react';
import { TeamMember } from '../../types/team';

interface TeamSpotlightProps {
  badge: string;
  title: string;
  members: TeamMember[];
  /** Number of avatar columns per row on large screens; card size ratio stays fixed. */
  columns?: number;
  /** Label shown above the tag list on the detail popup, e.g. "Research area" or "Skills". */
  specializationLabel?: string;
}

const lgColsClass: Record<number, string> = {
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
  6: 'lg:grid-cols-6',
};

export const TeamSpotlight: React.FC<TeamSpotlightProps> = ({
  badge,
  title,
  members,
  columns = 4,
  specializationLabel = 'Specialization',
}) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = members.find((m) => m.id === selectedId) ?? null;
  const close = () => setSelectedId(null);

  // Close on Escape and lock page scroll while the popup is open
  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selected]);

  if (members.length === 0) return null;

  return (
    <div>
      {/* Section label, mirrors the checked "☒" marker from the sketch */}
      <div className="flex items-center gap-3 mb-8">
        <span className="flex items-center justify-center w-6 h-6 rounded-md bg-rose-300/80 text-white text-xs font-bold shrink-0">
          ✓
        </span>
        <div>
          <span className="text-xs font-semibold tracking-wider text-rose-300/90 uppercase">{badge}</span>
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 leading-tight">{title}</h3>
        </div>
      </div>

      {/* Avatar selector grid — same card size ratio for every member, just more/fewer per row */}
      <div className={`grid grid-cols-2 sm:grid-cols-3 ${lgColsClass[columns] ?? 'lg:grid-cols-4'} gap-5`}>
        {members.map((member) => {
          const isActive = member.id === selected?.id;
          return (
            <button
              key={member.id}
              type="button"
              onClick={() => setSelectedId(member.id)}
              className={`group relative rounded-3xl overflow-hidden aspect-[4/5] border-2 text-left transition-all duration-300 focus:outline-none ${
                isActive
                  ? 'border-pink-500 shadow-lg shadow-pink-500/20'
                  : 'border-transparent hover:border-pink-200'
              }`}
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3.5 pt-6">
                <p className="text-white text-base font-semibold leading-tight truncate">{member.name}</p>
                <p className="text-white/70 text-xs truncate">{member.role}</p>
                {member.affiliation && (
                  <p className="text-white/60 text-xs truncate">{member.affiliation}</p>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Detail popup card */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selected.name}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 w-full max-w-md rounded-[28px] bg-white border border-gray-100 shadow-2xl overflow-hidden my-8"
            >
              <button
                type="button"
                onClick={close}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 backdrop-blur text-gray-500 hover:text-gray-900 hover:bg-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-64 w-full overflow-hidden bg-gray-100">
                <img src={selected.imageUrl} alt={selected.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 space-y-3">
                <h4 className="text-lg font-bold font-heading text-gray-900">{selected.name}</h4>
                <p className="text-sm font-semibold text-pink-600">{selected.role}</p>
                {selected.affiliation && (
                  <p className="flex items-center gap-1.5 text-sm text-gray-500">
                    <Building2 className="w-3.5 h-3.5 shrink-0" />
                    {selected.affiliation}
                  </p>
                )}

                {selected.specialization.length > 0 && (
                  <div className="pt-1">
                    <p className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase mb-2">
                      {specializationLabel}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selected.specialization.map((s) => (
                        <span
                          key={s}
                          className="px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-xs font-medium border border-pink-100"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <a
                    href={selected.scholarUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-pink-600 transition-colors duration-300"
                  >
                    <GraduationCap className="w-4 h-4" />
                    Scholar
                  </a>
                  {selected.linkedinUrl && (
                    <a
                      href={selected.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black text-white text-sm font-semibold hover:bg-pink-600 transition-colors duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TeamSpotlight;
