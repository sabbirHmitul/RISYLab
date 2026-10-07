import React from 'react';
import PageHero from '../Common/PageHero';
import CurrentProjects from '../CurrentProjects/CurrentProjects';

export const ResearchPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Research"
        title="Our Research"
        subtitle="Ongoing research and innovation at RISY Lab, from waste to energy and bio-materials to clean water and air solutions."
      />

      <div className="py-10 sm:py-14">
        <CurrentProjects />
      </div>
    </div>
  );
};

export default ResearchPage;
