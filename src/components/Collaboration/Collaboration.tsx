import React from 'react';
import { motion } from 'motion/react';
import { Globe, Handshake, ArrowRight } from 'lucide-react';
import Container from '../Common/Container';
import SectionTitle from '../Common/SectionTitle';
import CollaborationCard from './CollaborationCard';
import { partnersData } from '../../data/partners';
import Button from '../Common/Button';

interface CollaborationProps {
  onOpenVolunteerModal?: () => void;
}

export const Collaboration: React.FC<CollaborationProps> = ({ onOpenVolunteerModal }) => {
  return (
    <section id="collaboration" className="py-20 sm:py-28 bg-gray-50/70 border-t border-gray-100 relative overflow-hidden">
      <h2 className="text-center mb-10 text-3xl sm:text-4xl md:text-5xl font-black font-heading text-gray-900 tracking-tight">
        Collaboration</h2>
      <Container>


        {/* Responsive Logo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8">
          {partnersData.map((partner, idx) => (
            <CollaborationCard key={partner.id} partner={partner} index={idx} />
          ))}
        </div>


      </Container>
    </section>
  );
};

export default Collaboration;
