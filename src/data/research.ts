import { ResearchArea } from '../types/research';
import activityImg1 from '../../assets/img/activity/a1.png';
import activityImg2 from '../../assets/img/activity/a2.jpeg';
import activityImg3 from '../../assets/img/activity/a3.png';
import activityImg4 from '../../assets/img/activity/a4.jpeg';
// a5.heif may not be supported by the bundler; fall back to a1.png
import activityImg5 from '../../assets/img/activity/a1.png';

export const researchAreasData: ResearchArea[] = [
  {
    id: 'res-1',
    unitName: 'Unit 01',
    title: 'Engineering & Lab Practice',
    description: 'Env. chemistry, Water & Air analysis, Waste to bio-produce',
    imageUrl: activityImg1,
    leadResearcher: 'Dr. Arisya Rahman',
    publicationsCount: 14,
    tags: ['Civic Tech', 'Social Enterprise', 'Leadership Development'],
    focusAreas: ['Grassroots Governance', 'Youth Policy Frameworks', 'Peer Incubators']
  },
  {
    id: 'res-2',
    unitName: 'Unit 02',
    title: 'Youth Outdoor Activity',
    description: 'Tree Plantation, Group activity, Green Training',
    imageUrl: activityImg2,
    leadResearcher: 'Prof. Marcus Vance',
    publicationsCount: 22,
    tags: ['AI Literacy', 'EDTech', 'Digital Inclusion'],
    focusAreas: ['Open Source Toolkits', 'Rural Coding Academies', 'Maker Spaces']
  },
  {
    id: 'res-3',
    unitName: 'Unit 03',
    title: 'Simulation & Ai Modeling',
    description: 'ASPEN, MATLAB, Machine learning, GIS, Carbon Credit calculation',
    imageUrl: activityImg3,
    leadResearcher: 'Dr. Sarah Lin',
    publicationsCount: 18,
    tags: ['Mental Health', 'Youth Resilience', 'Psychology'],
    focusAreas: ['Digital Mindfulness', 'Crisis Intervention', 'Youth Advocacy']
  },

  {
    id: 'res-4',
    unitName: 'Unit 04',
    title: 'Robotics Practice',
    description: 'Rdno, IOT, Automation',
    imageUrl: activityImg4,
    leadResearcher: 'Eng. David O’Connor',
    publicationsCount: 11,
    tags: ['Climate Resilience', 'Circular Economy', 'Ecology'],
    focusAreas: ['Urban Reforestation', 'Ocean Plastics Mitigation', 'Green Skills']
  },
  {
    id: 'res-5',
    unitName: 'Unit 05',
    title: 'Education & Public health',
    description: 'Child green education, Climate disease, Waste to bio-produce',
    imageUrl: activityImg5,
    leadResearcher: 'Nadia Thorne, M.Sc.',
    publicationsCount: 16,
    tags: ['Gig Economy', 'Entrepreneurship', 'Micro-credentials'],
    focusAreas: ['Freelancer Rights', 'Angel Incubation', 'Workplace Ethics']
  }
];
