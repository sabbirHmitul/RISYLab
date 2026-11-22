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
    <section id="collaboration" className="scroll-mt-20 py-5 bg-gray-50/70 border-t border-gray-100 relative overflow-hidden">
      <h2 className="text-3xl sm:text-4xl md:text-4xl font-black font-heading text-[#595959] tracking-tight text-center mb-5">
        Collaboration</h2>
      <Container>


        {/* Phones and small tablets: swipeable slider. Computers (md and up): 6-column grid. */}
        <div className="flex md:grid md:grid-cols-6 gap-2 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-px-4 md:scroll-px-0 -mx-4 px-4 md:mx-0 md:px-0 pb-3 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {partnersData.map((partner, idx) => (
            <CollaborationCard key={partner.id} partner={partner} index={idx} />
          ))}
        </div>
        <p className="md:hidden mt-1 text-center text-xs text-gray-400">Swipe to see more →</p>

        <div className="flex justify-center mt-8 md:mt-10">
          <Button
            variant="primary"
            size="md"
            icon={<Handshake className="w-5 h-5" />}
            iconPosition="left"
            onClick={() =>
              window.open(
                'https://docs.google.com/forms/d/e/1FAIpQLSfcdaC-Eknm0eMO61_WwyOcX99y5sXQYiD4_Y3GOfbxSEksVQ/viewform?usp=sharing&ouid=10279378077306022104',
                '_blank',
                'noopener,noreferrer'
              )
            }
          >
            Collaborate With Us
          </Button>
        </div>

      </Container>
    </section>
  );
};

export default Collaboration;
