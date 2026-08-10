import React from 'react';
import { motion } from 'motion/react';
import { ResearchArea } from '../../types/research';

interface ResearchCardProps {
  research: ResearchArea;
  index: number;
  onSelect?: (research: ResearchArea) => void;
}

export const ResearchCard: React.FC<ResearchCardProps> = ({ research, index, onSelect }) => {
  const keywords = research.description
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group flex flex-col h-full bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 overflow-hidden"
    >
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-900">
        <img
          src={research.imageUrl}
          alt={research.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="px-3 py-2 flex flex-col items-start justify-start gap-1">
        <h3 className="text-lg font-bold font-heading text-gray-900 transition-colors group-hover:text-pink-600 leading-snug text-left">
          {research.title}
        </h3>

        <div className="flex flex-wrap gap-1.5">
          {keywords.map((keyword) => (
            <span
              key={keyword}
              className="rounded-xl border border-gray-300 px-2 py-0.5 text-[12px] font-medium text-gray-400"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ResearchCard;

