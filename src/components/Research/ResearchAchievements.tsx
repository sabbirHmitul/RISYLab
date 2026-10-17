import React from 'react';
import Container from '../Common/Container';
import ResearchAchievementCard from './ResearchAchievementCard';
import { NewsItem } from '../../types/news';
import hydrologyMapImg from '../../../assets/img/research/hydrology-map.webp';

/**
 * Achievements section for the Research page.
 * Compact cards (photo left, text right), two per row on wide screens.
 * Edit the cards here; they are separate from the home page and News page stories.
 */
const researchAchievements: (NewsItem & { imageFit?: 'cover' | 'contain' })[] = [
  {
    id: 'research-ach-zero-waste',
    title: 'Zero Waste Product',
    excerpt:
      'We are developing products from biomass sources. From the waste and used products, we will then develop new usable products for human applications.',
    date: 'Aug, 2026',
    category: 'Patent & Implementation',
    imageUrl: '', // photo to be uploaded
    link: '#',
    collaborators: ['Dr. Latiful Bari (CARS, DU)', 'Suman Dewanjee (USA)', 'UNIDO, Bangladesh'],
  },
  {
    id: 'research-ach-hydrology',
    title: 'Prediction Algorithm for Climate & Hydrology in Bangladesh',
    excerpt:
      'We are analyzing hydrology and developing machine learning models for advanced hydrological prediction across Bangladesh.',
    date: 'Jun, 2025',
    category: 'Ongoing Project',
    imageUrl: hydrologyMapImg,
    imageFit: 'contain', // show the whole map, no cropping
    link: '#',
    collaborators: ['Mehedi Hasan (Canada)', 'IWA'],
  },
];

export const ResearchAchievements: React.FC = () => {
  return (
    <section id="achievements" className="py-10 bg-gray-50/70 border-t border-gray-100">
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-start">
          {researchAchievements.map((item) => (
            <ResearchAchievementCard key={item.id} item={item} collaboratorsLabel="Thanks to:" />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ResearchAchievements;
