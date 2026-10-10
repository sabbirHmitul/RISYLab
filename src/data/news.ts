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
    category: 'National Seminar',
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
];
