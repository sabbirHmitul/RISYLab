import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, CalendarDays } from 'lucide-react';
import { NewsItem } from '../../types/news';

interface NewsCardProps {
  item: NewsItem;
  index: number;
}

export const NewsCard: React.FC<NewsCardProps> = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group flex flex-col h-full bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 overflow-hidden"
    >
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-pink-600 text-[11px] font-semibold shadow-sm">
          {item.category}
        </span>
      </div>

      <div className="p-5 flex flex-col gap-2 flex-1">
        <span className="flex items-center gap-1.5 text-[11px] text-gray-400">
          <CalendarDays className="w-3.5 h-3.5" />
          {item.date}
        </span>
        <h3 className="text-base font-bold font-heading text-gray-900 leading-snug group-hover:text-pink-600 transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 flex-1">{item.excerpt}</p>

        <a
          href={item.link}
          className="inline-flex items-center gap-1.5 mt-2 w-fit text-xs font-semibold text-gray-700 hover:text-pink-600 transition-colors"
        >
          Read more
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.div>
  );
};

export default NewsCard;
