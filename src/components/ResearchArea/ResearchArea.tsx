import React from 'react';
import Container from '../Common/Container';

import ResearchCard from './ResearchCard';
import { researchAreasData } from '../../data/research';

interface ResearchAreaProps {
  onOpenVolunteerModal?: () => void;
}

export const ResearchArea: React.FC<ResearchAreaProps> = () => {
  return (
    <section id="research" className="py-5 bg-gray-50/70 border-y border-gray-100 relative">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-black font-heading text-[#595959] tracking-tight">
            Activity Area
          </h2>
        </div>

        {/* 5-Column Responsive Grid (Desktop: 5, Tablet: 3, Mobile: 1) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {researchAreasData.map((item, idx) => (
            <ResearchCard key={item.id} research={item} index={idx} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ResearchArea;
