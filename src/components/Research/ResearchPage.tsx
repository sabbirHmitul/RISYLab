import React from 'react';
import { motion } from 'motion/react';
import Container from '../Common/Container';
import PageHero from '../Common/PageHero';
import { researchAreasData } from '../../data/research';

export const ResearchPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Research"
        title="Our Research"
        subtitle="RISY Lab works across engineering, environment, simulation, robotics and public health, with young researchers at the centre of every unit."
      />

      <section className="py-16 sm:py-20 bg-white">
        <Container className="max-w-5xl">
          <div className="space-y-10 sm:space-y-14">
            {researchAreasData.map((item, idx) => {
              const keywords = item.description
                .split(',')
                .map((k) => k.trim())
                .filter(Boolean);
              const reversed = idx % 2 === 1;

              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className={`flex flex-col md:flex-row ${reversed ? 'md:flex-row-reverse' : ''} gap-6 md:gap-10 items-center`}
                >
                  <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-sm border border-gray-100 bg-gray-900">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-56 sm:h-72 object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="w-full md:w-1/2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-pink-600">
                      {item.unitName}
                    </span>
                    <h2 className="mt-2 text-2xl sm:text-3xl font-black font-heading text-gray-900 tracking-tight">
                      {item.title}
                    </h2>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-1 text-sm font-medium text-gray-600"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ResearchPage;
