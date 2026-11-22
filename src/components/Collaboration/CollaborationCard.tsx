import React from 'react';
import { motion } from 'motion/react';
import { Partner } from '../../types/partner';

interface CollaborationCardProps {
  partner: Partner;
  index: number;
}

export const CollaborationCard: React.FC<CollaborationCardProps> = ({ partner, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="shrink-0 w-[calc((100%-1rem)/3)] md:w-auto snap-start bg-white rounded-2xl p-1.5 md:p-3 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center gap-2 text-center group cursor-pointer"
    >
      <div className="w-full h-20 shrink-0 flex items-center justify-center">
        <img
          src={partner.logoUrl}
          alt={partner.name}
          loading="lazy"
          decoding="async"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
          className="w-full h-full object-contain "
        />
      </div>

      <h3 className="text-sm sm:text-base font-heading text-gray-900 leading-snug min-h-[2.5rem] flex items-center">
        {partner.name}
      </h3>
    </motion.div>
  );
};

export default CollaborationCard;

