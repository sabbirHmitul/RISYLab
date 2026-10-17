import React, { useEffect, useState } from 'react';
import Container from '../Common/Container';
import ResearchAchievementCard from './ResearchAchievementCard';
import { NewsItem } from '../../types/news';
import hydrologyMapImg from '../../../assets/img/research/hydrology-map.webp';

/**
 * Achievements section for the Research page.
 * Compact cards (photo left, text right) in a slider on wide screens:
 * two full cards plus one third of the next are visible, and the row slides every 5 seconds.
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
  {
    id: 'research-ach-new-project',
    title: 'New Project', // title to be added
    excerpt: 'Details of this project will be added soon.', // text to be added
    date: 'Oct, 2026',
    category: 'Ongoing Project',
    imageUrl: '', // photo to be uploaded
    link: '#',
    collaborators: [],
  },
];

const SLIDE_INTERVAL_MS = 5000;

export const ResearchAchievements: React.FC = () => {
  // false = first two cards in view, true = slid to show the last two cards
  const [slid, setSlid] = useState(false);
  const [paused, setPaused] = useState(false);
  const canSlide = researchAchievements.length > 2;

  useEffect(() => {
    if (!canSlide || paused) return;
    const timer = window.setInterval(() => setSlid((prev) => !prev), SLIDE_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [canSlide, paused]);

  return (
    <section id="achievements" className="py-10 bg-gray-50/70 border-t border-gray-100">
      <Container>
        {/* Wide screens: slider. Card width = 3/7 of (row width minus two 40px gaps),
            so two cards plus one third of the next fill the row. */}
        <div
          className="hidden xl:block overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex gap-10 transition-transform duration-700 ease-in-out motion-reduce:transition-none"
            style={{ transform: slid ? 'translateX(calc((100% - 80px) * -2 / 7))' : 'translateX(0)' }}
          >
            {researchAchievements.map((item) => (
              <div key={item.id} className="flex-none" style={{ width: 'calc((100% - 80px) * 3 / 7)' }}>
                <ResearchAchievementCard item={item} collaboratorsLabel="Thanks to:" compact />
              </div>
            ))}
          </div>
        </div>

        {/* Smaller screens: cards stacked one under another */}
        <div className="grid grid-cols-1 gap-10 xl:hidden">
          {researchAchievements.map((item) => (
            <ResearchAchievementCard key={item.id} item={item} collaboratorsLabel="Thanks to:" />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ResearchAchievements;
