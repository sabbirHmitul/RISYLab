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
    <section id="collaboration" className="py-5 bg-gray-50/70 border-t border-gray-100 relative overflow-hidden">
      <h2 className="text-3xl sm:text-4xl md:text-4xl font-black font-heading text-[#595959] tracking-tight text-center mb-5">
        Collaboration</h2>
      <Container>


        {/* Responsive Logo Grid */}
        <div className="grid grid-cols-6 gap-6 sm:gap-8">
          {partnersData.map((partner, idx) => (
            <CollaborationCard key={partner.id} partner={partner} index={idx} />
          ))}
        </div>


      </Container>
    </section>
  );
};

export default Collaboration;
