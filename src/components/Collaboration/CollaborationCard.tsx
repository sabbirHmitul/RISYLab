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
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
    >
      {/* Partner Logo */}
      <div className="w-20 h-20 rounded-2xl bg-gray-50 p-2.5 flex items-center justify-center mb-4 border border-gray-100 group-hover:bg-pink-50/50 transition-colors">
        <img
          src={partner.logoUrl}
          alt={partner.name}
          className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 rounded-xl"
        />
      </div>

      {/* Organization Title */}
      <h3 className="text-base font-bold font-heading text-gray-900 group-hover:text-pink-600 transition-colors">
        {partner.name}
      </h3>
    </motion.div>
  );
};

export default CollaborationCard;

