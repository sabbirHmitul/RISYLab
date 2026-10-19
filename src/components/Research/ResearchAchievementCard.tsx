import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, CalendarDays } from 'lucide-react';
import { NewsItem } from '../../types/news';

interface ResearchAchievementCardProps {
  item: NewsItem & { imageFit?: 'cover' | 'contain' };
  /** Label before the outlined name tags (default: "Collaboration:"). */
  collaboratorsLabel?: string;
  /** Smaller text and photo, used in the slider where three cards share one row. */
  compact?: boolean;
}

/** Compact achievement card for the Research page: photo on the left, text on the right. */
export const ResearchAchievementCard: React.FC<ResearchAchievementCardProps> = ({ item, collaboratorsLabel = 'Collaboration:', compact = false }) => {
  const c = (normal: string, small: string) => (compact ? small : normal);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`grid h-full grid-cols-1 items-start rounded-[24px] border border-pink-400 bg-white ${c('p-4 sm:p-5', 'p-3')} ${c('sm:grid-cols-[45%_1fr] gap-5 sm:gap-6', 'sm:grid-cols-[40%_1fr] gap-3.5')}`}
    >
      {/* Photo */}
      {/* On wider screens the photo stretches to match the text height, so the space below the text equals the space above it. */}
      <div className={`relative h-52 sm:h-auto sm:min-h-[180px] sm:self-stretch overflow-hidden rounded-[20px] ${item.imageFit === 'contain' && item.imageUrl ? 'bg-white border border-gray-100' : 'bg-gray-100'}`}>
        {item.imageUrl && (
        <img
          src={item.imageUrl}
          alt={item.title}
          loading="lazy"
          decoding="async"
          className={`w-full h-full sm:absolute sm:inset-0 ${item.imageFit === 'contain' ? 'object-contain' : 'object-cover'} transition-transform duration-500 hover:scale-105`}
        />
        )}
      </div>

      {/* Text */}
      <div className={`flex flex-col ${c('gap-3', 'gap-2')}`}>
        <div className={`flex items-center ${c('gap-3', 'gap-2')}`}>
          <span className={`whitespace-nowrap rounded-full bg-pink-50 text-pink-600 font-semibold border border-pink-100 ${c('px-3 py-1 text-xs', 'px-2.5 py-0.5 text-[11px]')}`}>
            {item.category}
          </span>
          <span className={`flex items-center gap-1.5 whitespace-nowrap text-gray-400 ${c('text-xs', 'text-[11px]')}`}>
            <CalendarDays className="w-3.5 h-3.5" />
            {item.date}
          </span>
        </div>

        <h3 className={`font-bold font-heading text-gray-900 leading-tight ${c('text-xl sm:text-2xl', 'text-lg')}`}>{item.title}</h3>

        <p className={`text-gray-600 leading-relaxed text-justify ${c('text-sm', 'text-[13px]')}`}>{item.excerpt}</p>

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
          <div className={`flex flex-wrap items-center ${c('gap-2', 'gap-1')}`}>
            <span className={`font-semibold text-gray-800 ${c('text-sm', 'text-[13px]')}`}>{collaboratorsLabel}</span>
            {item.collaborators.map((name) => (
              <span
                key={name}
                className={`whitespace-nowrap rounded-lg border border-gray-300 py-0.5 font-medium text-gray-500 ${c('px-2.5 text-xs', 'px-1.5 text-[11px]')}`}
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
