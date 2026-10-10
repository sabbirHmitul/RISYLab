import React from 'react';
import PageHero from '../Common/PageHero';
import CurrentProjects from '../CurrentProjects/CurrentProjects';
import ResearchAchievements from './ResearchAchievements';

export const ResearchPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Research"
        title="Build Own Capacity"
        subtitle="We are developing our own capacity, talent, and innovations to solve our problems and go through advancements."
      />

      <ResearchAchievements />

      <div className="pt-2 pb-10 sm:pt-4 sm:pb-14">
        <CurrentProjects />
      </div>
    </div>
  );
};

export default ResearchPage;
