import React from 'react';
import Container from '../Common/Container';
import PageHero from '../Common/PageHero';
import PublicationCard from './PublicationCard';
import { publicationsData } from '../../data/publications';

export const PublicationPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Publication"
        title="Publications"
        subtitle="Peer-reviewed work from RISY Lab researchers spanning environmental science, engineering and youth policy."
      />

      <section className="py-16 sm:py-20 bg-white">
        <Container className="max-w-4xl">
          <div className="space-y-8">
            {publicationsData.map((publication, idx) => (
              <PublicationCard key={publication.id} publication={publication} index={idx} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default PublicationPage;
