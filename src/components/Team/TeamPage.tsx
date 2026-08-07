import React from 'react';
import Container from '../Common/Container';
import PageHero from '../Common/PageHero';
import TeamSpotlight from './TeamSpotlight';
import { teamData } from '../../data/team';

export const TeamPage: React.FC = () => {
  const seniorMembers = teamData.filter((m) => m.category === 'senior');
  const teamLeads = teamData.filter((m) => m.category === 'lead');

  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Team"
        title="Meet Our Team"
        subtitle="The researchers, scholars and youth leaders driving RISY Lab's mission — bridging science and grassroots action."
      />

      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <TeamSpotlight badge="Our People" title="Senior Members" members={seniorMembers} />
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50/70 border-y border-gray-100">
        <Container>
          <TeamSpotlight badge="Our People" title="Team Lead" members={teamLeads} />
        </Container>
      </section>
    </div>
  );
};

export default TeamPage;
