import React from 'react';
import Container from '../Common/Container';
import AchievementCard from './AchievementCard';
import { achievementsData } from '../../data/achievements';

/** Home page Achievements section. Uses its own data and card, fully separate from the News page. */
export const HomeAchievements: React.FC = () => {
  return (
    <section id="achievements" className="py-10 bg-gray-50/70 border-t border-gray-100">
      <h2 className="text-3xl sm:text-4xl md:text-4xl font-black font-heading text-[#595959] tracking-tight text-center mb-8">
        Achievements
      </h2>
      <Container>
        <div className="flex flex-col gap-8">
          {achievementsData.map((item, idx) => (
            <AchievementCard key={item.id} item={item} reverse={idx % 2 === 1} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HomeAchievements;
