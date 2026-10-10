import React from 'react';
import Container from '../Common/Container';
import ResearchAchievementCard from './ResearchAchievementCard';
import { NewsItem } from '../../types/news';

/**
 * Achievements section for the Research page.
 * Compact cards (photo left, text right), two per row on wide screens.
 * Edit the cards here; they are separate from the home page and News page stories.
 */
const researchAchievements: NewsItem[] = [
  {
    id: 'research-ach-zero-waste',
    title: 'Zero Waste Product',
    excerpt:
      'We are developing products from biomass sources. From the waste and used products, we will then develop new usable products for human applications.',
    date: 'Aug, 2026',
    category: 'Patent & Implementation',
    imageUrl:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    link: '#',
    collaborators: ['Dr. Latiful Bari', 'Suman Dewanjee', 'UNIDO, Bangladesh'],
  },
  {
    id: 'research-ach-hydrology',
    title: 'Hydrology & Risk Analysis & Machine Learning Prediction Algorithm',
    excerpt:
      'We are analyzing hydrology and developing machine learning models for advanced hydrological prediction across Bangladesh.',
    date: 'Jun, 2025',
    category: 'Ongoing Project',
    imageUrl:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
    link: '#',
    collaborators: ['Mehedi Hasan', 'IWA'],
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
