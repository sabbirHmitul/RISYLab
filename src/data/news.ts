import { NewsItem } from '../types/news';
import labPracticeImg from '../../assets/img/activity/lab-practice.webp';

export const newsData: NewsItem[] = [
  {
    id: 'news-media-jamuna',
    title: 'তারুণ্যের বাংলাদেশ | Youth for Bangladesh | Jamuna TV',
    excerpt:
      'We are developing youth for a modern Bangladesh. In Dhaka city, we are conducting several awareness and environmental activities.',
    thanks: [{ label: 'Filter BD', url: 'https://filterbangladesh.com' }],
    youtubeId: 'NXdZgvn117g',
    imageHeight: 425,
    date: 'Jun 2026',
    category: 'Media',
    imageUrl: 'https://img.youtube.com/vi/NXdZgvn117g/hqdefault.jpg',
    link: '#',
  },
  {
    id: 'news-3',
    title: 'Youth & Expert Discussion | Ministry of Health of Bangladesh',
    excerpt: 'We are discussing public health and climate-related diseases.',
    date: 'Aug 2026',
    category: 'Discussion',
    imageUrl:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80',
    readMore: [
      {
        label: 'The Climate Watch',
        url: 'https://theclimatewatch.com/bangladesh-warns-of-2-8-billion-annual-climate-health-risk-by-2030/',
      },
    ],
    link: '#',
  },
  {
    id: 'news-recp-award',
    title: 'RECP Expert & Industrial Application Award',
    excerpt: 'We are practicing Resource Efficient and Cleaner Production (RECP).',
    awardedBy: ['DoE Bangladesh', 'UNIDO Bangladesh'],
    date: 'Jul 2026',
    category: 'Expert Award',
    imageUrl: labPracticeImg,
    link: '#',
  },
  {
    id: 'news-1',
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
    id: 'news-2',
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
  {
    id: 'news-4',
    title: 'RISY Robotics Unit Presents at National IoT Symposium',
    excerpt: 'The Robotics & Automation team showcased their Arduino-based water quality sensor network to industry judges.',
    date: 'Jun 28, 2026',
    category: 'Conference',
    imageUrl:
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=80',
    link: '#',
  },
  {
    id: 'news-5',
    title: 'New Academic Partnership Signed with Jahangirnagar University',
    excerpt: 'RISY Lab expands its research network, opening new peer incubator programs for youth-led climate projects.',
    date: 'Jun 09, 2026',
    category: 'Partnership',
    imageUrl:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80',
    link: '#',
  },
  {
    id: 'news-6',
    title: 'Weekly Podcast Hits 10,000 Listeners Across Bangladesh',
    excerpt: 'Our founder’s talk series on green innovation continues to grow, now streaming on four platforms.',
    date: 'May 30, 2026',
    category: 'Media',
    imageUrl:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    link: '#',
  },
];
