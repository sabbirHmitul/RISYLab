import React from 'react';
import Container from '../Common/Container';
import PageHero from '../Common/PageHero';
import FeaturedNews from './FeaturedNews';
import { newsData } from '../../data/news';

export const NewsPage: React.FC = () => {
  // Cards appear in the same order as in src/data/news.ts
  const ordered = newsData;

  return (
    <div className="bg-white">
      <PageHero
        eyebrow="News"
        title="Latest News"
        subtitle="Milestones, workshops and stories from RISY Lab's research and youth development journey."
      />

      <section className="py-16 sm:py-20 bg-gray-50/70 border-t border-gray-100">
        <Container>
          <div className="flex flex-col gap-8">
            {ordered.map((item, idx) => (
              // position is 1-based: odd positions show image-left, even positions image-right
              <div key={item.id} className="w-full">
                <FeaturedNews item={item} reverse={(idx + 1) % 2 === 0} />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default NewsPage;
