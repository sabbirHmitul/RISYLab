import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, CalendarDays } from 'lucide-react';
import { NewsItem } from '../../types/news';

interface FeaturedNewsProps {
  item: NewsItem;
  reverse?: boolean;
}

export const FeaturedNews: React.FC<FeaturedNewsProps> = ({ item, reverse = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`grid grid-cols-1 lg:grid-cols-2 rounded-[32px] overflow-hidden border border-gray-100 shadow-xl bg-white`}
    >
      {/* 50% Image */}
      <div className={`h-72 lg:h-full min-h-[320px] overflow-hidden bg-gray-100 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
        <img src={item.imageUrl} alt={item.title} loading="lazy" decoding="async" className="w-full h-full object-cover" />
      </div>

      {/* 50% Content */}
      <div className={`p-8 sm:p-10 lg:p-12 flex flex-col justify-center gap-4 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-xs font-semibold border border-pink-100">
            {item.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-gray-400">
            <CalendarDays className="w-3.5 h-3.5" />
            {item.date}
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 leading-tight">
          {item.title}
        </h2>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.excerpt}</p>

        {item.link && item.link !== '#' && (
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mt-2 w-fit px-5 py-2.5 rounded-xl bg-pink-500 hover:bg-pink-600 text-white text-sm font-semibold shadow-[0_4px_14px_rgba(236,72,153,0.35)] transition-all duration-300"
        >
          Read Full Story
          <ArrowUpRight className="w-4 h-4" />
        </a>
        )}
      </div>
    </motion.div>
  );
};

export default FeaturedNews;
