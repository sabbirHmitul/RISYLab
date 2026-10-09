import React from 'react';
import PageHero from '../Common/PageHero';
import CurrentProjects from '../CurrentProjects/CurrentProjects';

export const ResearchPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Research"
        title="Build Own Capacity"
        subtitle="We are developing our own capacity, talent, and innovations to solve our problems and go through advancements."
      />

      <div className="py-10 sm:py-14">
        <CurrentProjects />
      </div>
    </div>
  );
};

export default ResearchPage;
