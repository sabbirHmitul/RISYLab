import React from 'react';
import Container from '../Common/Container';
import FeaturedNews from './FeaturedNews';
import { newsData } from '../../data/news';

/** Home page preview: the two latest stories, in the same card style as the News page. */
export const HomeNews: React.FC = () => {
  const featured = newsData.find((item) => item.featured) ?? newsData[0];
  const items = [featured, ...newsData.filter((item) => item.id !== featured.id)].slice(0, 2);

  return (
    <section id="news" className="py-10 bg-gray-50/70 border-t border-gray-100">
      <h2 className="text-3xl sm:text-4xl md:text-4xl font-black font-heading text-[#595959] tracking-tight text-center mb-8">
        Achievements
      </h2>
      <Container>
        <div className="flex flex-col gap-8">
          {items.map((item, idx) => (
            <FeaturedNews key={item.id} item={item} reverse={idx % 2 === 1} showVideo={false} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HomeNews;
