import { NewsItem } from '../types/news';
import healthSeminarImg from '../../assets/img/news/health-seminar.webp';
import recpAwardImg from '../../assets/img/news/recp-award.webp';

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
    category: 'NEWS Media',
    imageUrl: 'https://img.youtube.com/vi/NXdZgvn117g/hqdefault.jpg',
    link: '#',
  },
  {
    id: 'news-3',
    title: 'Youth & Expert Discussion | Ministry of Health of Bangladesh',
    excerpt:
      'We joined a high-level roundtable on "Nature and Health: Building Climate-Resilient Public Health Systems" at the Department of Environment, Dhaka. The State Minister for Health warned that climate-related health impacts could cost Bangladesh USD 2.8 billion every year by 2030.',
    imageHeight: 425,
    date: 'Aug 2026',
    category: 'National Seminar',
    imageUrl: healthSeminarImg,
    readMore: [
      {
        label: 'The Climate Watch',
        url: 'https://theclimatewatch.com/bangladesh-warns-of-2-8-billion-annual-climate-health-risk-by-2030/',
      },
    ],
    link: '#',
  },
  {
    id: 'news-plastic-stakeholder',
    title: 'Government Stakeholder Engagement of Plastic Pollution',
    excerpt:
      'We took part in a stakeholder engagement with government officials on plastic pollution in Bangladesh. The session brought together policymakers, experts and youth to discuss how plastic waste harms our environment and public health, and to share practical solutions for reducing it.',
    thanks: [{ label: 'UNOPS', url: 'https://www.unops.org/bangladesh' }],
    youtubeId: 'ClhzjGj2f9s',
    imageHeight: 425,
    date: '',
    category: 'Policy Dialogue',
    imageUrl: 'https://img.youtube.com/vi/ClhzjGj2f9s/hqdefault.jpg',
    link: '#',
  },
  {
    id: 'news-recp-award',
    title: 'RECP Expert & Industrial Application Award',
    excerpt: 'We are practicing Resource Efficient and Cleaner Production (RECP).',
    awardedBy: ['DoE Bangladesh', 'UNIDO Bangladesh'],
    imageHeight: 425,
    date: 'Jul 2026',
    category: 'Expert Award',
    imageUrl: recpAwardImg,
    link: '#',
  },
];
