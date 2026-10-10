import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, CalendarDays } from 'lucide-react';
import { NewsItem } from '../../types/news';

interface ResearchAchievementCardProps {
  item: NewsItem;
  /** Label before the outlined name tags (default: "Collaboration:"). */
  collaboratorsLabel?: string;
}

/** Compact achievement card for the Research page: photo on the left, text on the right. */
export const ResearchAchievementCard: React.FC<ResearchAchievementCardProps> = ({ item, collaboratorsLabel = 'Collaboration:' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 sm:grid-cols-[45%_1fr] gap-5 sm:gap-6 items-start"
    >
      {/* Photo */}
      <div className="h-52 sm:h-[272px] overflow-hidden rounded-[20px] bg-gray-100">
        <img
          src={item.imageUrl}
          alt={item.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-xs font-semibold border border-pink-100">
            {item.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-gray-400">
            <CalendarDays className="w-3.5 h-3.5" />
            {item.date}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 leading-tight">{item.title}</h3>

        <p className="text-gray-600 text-sm leading-relaxed text-justify">{item.excerpt}</p>

        {item.publications && item.publications.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold text-gray-800">Read publications:</span>
            {item.publications.map((pub) => (
              <a
                key={pub.url}
                href={pub.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#e6007e] hover:bg-pink-700 text-white text-xs font-semibold shadow-sm transition-colors"
              >
                {pub.label}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        )}

        {item.pendingPublications && item.pendingPublications.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold text-gray-800">Pending publication:</span>
            {item.pendingPublications.map((name) => (
              <span
                key={name}
                className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#e6007e] text-white text-xs font-semibold shadow-sm"
              >
                {name}
              </span>
            ))}
          </div>
        )}

        {item.collaborators && item.collaborators.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold text-gray-800">{collaboratorsLabel}</span>
            {item.collaborators.map((name) => (
              <span
                key={name}
                className="rounded-lg border border-gray-300 px-2.5 py-0.5 text-xs font-medium text-gray-500"
              >
                {name}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ResearchAchievementCard;
