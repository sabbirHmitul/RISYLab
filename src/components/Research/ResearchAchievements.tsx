import React from 'react';
import Container from '../Common/Container';
import FeaturedNews from '../News/FeaturedNews';
import { newsData } from '../../data/news';

/**
 * Research page version of the home "Achievements" section.
 * Same cards, but two per row on computer screens.
 * To change which stories appear, edit the ids below (from src/data/news.ts).
 */
const ACHIEVEMENT_IDS = ['news-1', 'news-2'];

/** Titles used only on the Research page (home and News pages keep the original titles). */
const TITLE_OVERRIDES: Record<string, string> = {
  'news-1': 'Zero Waste Product',
  'news-2': 'Hydrology & Risk Analysis & Machine Learning Prediction Algorithm',
};

export const ResearchAchievements: React.FC = () => {
  const items = ACHIEVEMENT_IDS.map((id) => newsData.find((item) => item.id === id))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
    .map((item) => ({ ...item, title: TITLE_OVERRIDES[item.id] ?? item.title }));

  return (
    <section id="achievements" className="py-10 bg-gray-50/70 border-t border-gray-100">
      <h2 className="text-3xl sm:text-4xl md:text-4xl font-black font-heading text-[#595959] tracking-tight text-center mb-8">
        Achievements
      </h2>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {items.map((item) => (
            <FeaturedNews key={item.id} item={item} stacked />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ResearchAchievements;
