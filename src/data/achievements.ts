import { AchievementItem } from '../types/achievement';

/** Home page Achievements only. Editing this does NOT change the News page (src/data/news.ts). */
export const achievementsData: AchievementItem[] = [
  {
    id: 'ach-1',
    title: 'Biomass to Bio-plastic Film for Various Applications',
    excerpt:
      'We have developed useful, anti-bacterial bio-plastic films from a variety of waste biomass, such as waste egg shell, shrimp shell and sugarcane bagasse. These films have been applied to wound healing, food packaging and shoe insoles. Their wound-healing activity has also been studied through animal trials, an important step toward safe medical use.',
    publications: [
      { label: 'Chitosan film', url: 'https://doi.org/10.1016/j.cscee.2025.101256' },
      { label: 'Egg shell', url: 'https://doi.org/10.1007/978-981-95-1630-8_16' },
    ],
    collaborators: ['CARS, DU', 'BCSIR', 'BUET'],
    imageHeight: 450,
    date: 'Dec 02, 2025',
    category: 'Milestone',
    imageUrl:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    link: '#',
  },
  {
    id: 'ach-2',
    title: 'Tannery Waste to Bio-crude Oil Synthesis',
    excerpt:
      'We have successfully synthesized bio-crude oil from raw tannery waste with a 53% yield. We are now extracting diesel from this bio-crude and using ASPEN simulation to assess its cost, production rate and environmental impact for commercialization.',
    pendingPublications: ["ICChE BUET'26"],
    collaborators: ['BCSIR', 'BUTEX', 'Monash University'],
    imageHeight: 425,
    date: 'Jul 21, 2026',
    category: 'Research',
    imageUrl:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
    link: '#',
  },
];
