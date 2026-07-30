import React from 'react';
import { motion } from 'motion/react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  badge,
  centered = true,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`mb-12 sm:mb-16 ${centered ? 'text-center' : 'text-left'} ${className}`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-pink-600 uppercase bg-pink-50 rounded-full border border-pink-100">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight font-heading">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto font-sans leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-20 bg-pink-500 rounded-full ${centered ? 'mx-auto' : ''}`} />
    </motion.div>
  );
};

export default SectionTitle;
