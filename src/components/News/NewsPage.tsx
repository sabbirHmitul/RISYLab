import React from 'react';
import Container from '../Common/Container';
import PageHero from '../Common/PageHero';
import FeaturedNews from './FeaturedNews';
import NewsCard from './NewsCard';
import { newsData } from '../../data/news';

export const NewsPage: React.FC = () => {
  const featured = newsData.find((item) => item.featured) ?? newsData[0];
  const rest = newsData.filter((item) => item.id !== featured.id);

  return (
    <div className="bg-white">
      <PageHero
        eyebrow="News"
        title="Latest News"
        subtitle="Milestones, workshops and stories from RISY Lab's research and youth development journey."
      />

      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <FeaturedNews item={featured} />
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50/70 border-t border-gray-100">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((item, idx) => (
              <NewsCard key={item.id} item={item} index={idx} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default NewsPage;
