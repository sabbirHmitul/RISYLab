import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Building2 } from 'lucide-react';
import { TeamMember } from '../../types/team';

interface TeamSpotlightProps {
  badge: string;
  title: string;
  members: TeamMember[];
}

export const TeamSpotlight: React.FC<TeamSpotlightProps> = ({ badge, title, members }) => {
  const [selectedId, setSelectedId] = useState(members[0]?.id);
  const selected = members.find((m) => m.id === selectedId) ?? members[0];

  if (!selected) return null;

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

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 items-start">
        {/* Avatar selector grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {members.map((member) => {
            const isActive = member.id === selected.id;
            return (
              <button
                key={member.id}
                type="button"
                onClick={() => setSelectedId(member.id)}
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
        <div className="lg:sticky lg:top-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.3 }}
              className="rounded-[28px] bg-white border border-gray-100 shadow-xl overflow-hidden"
            >
              <div className="h-52 w-full overflow-hidden bg-gray-100">
                <img src={selected.imageUrl} alt={selected.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 space-y-3">
                <h4 className="text-lg font-bold font-heading text-gray-900">{selected.name}</h4>
                <p className="text-sm font-semibold text-pink-600">{selected.role}</p>
                <p className="flex items-center gap-1.5 text-sm text-gray-500">
                  <Building2 className="w-3.5 h-3.5 shrink-0" />
                  {selected.affiliation}
                </p>

                <div className="pt-1">
                  <p className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase mb-2">
                    Specialization
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

                <a
                  href={selected.scholarUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-3 px-4 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-pink-600 transition-colors duration-300"
                >
                  <GraduationCap className="w-4 h-4" />
                  Scholar
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TeamSpotlight;
