import { TeamMember } from '../types/team';
import mitulImage from '../../assets/img/mitul.png';

export const teamData: TeamMember[] = [
  // Senior Members
  {
    id: 'senior-1',
    name: 'Dr. Ayesha Rahman',
    role: 'Senior Researcher',
    affiliation: 'University of Dhaka',
    specialization: ['Environmental Chemistry', 'Water Analysis'],
    imageUrl:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80',
    scholarUrl: 'https://scholar.google.com/',
    category: 'senior',
  },
  {
    id: 'senior-2',
    name: 'Prof. Michael Chen',
    role: 'Senior Researcher',
    affiliation: 'BUET',
    specialization: ['Process Engineering', 'Bio-diesel'],
    imageUrl:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    scholarUrl: 'https://scholar.google.com/',
    category: 'senior',
  },
  {
    id: 'senior-3',
    name: 'Dr. Farhana Islam',
    role: 'Senior Researcher',
    affiliation: 'North South University',
    specialization: ['Public Health', 'Climate & Disease'],
    imageUrl:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    scholarUrl: 'https://scholar.google.com/',
    category: 'senior',
  },
  {
    id: 'senior-4',
    name: 'Dr. Kabir Hossain',
    role: 'Senior Researcher',
    affiliation: 'CUET',
    specialization: ['Robotics', 'Automation'],
    imageUrl:
      'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=600&q=80',
    scholarUrl: 'https://scholar.google.com/',
    category: 'senior',
  },

  // Team Leads
  {
    id: 'lead-1',
    name: 'Sabbir H. Mitul',
    role: 'Founder & Team Lead · PhD Student',
    affiliation: 'University of Alberta, Canada',
    specialization: ['Waste-to-Energy', 'Environmental Sustainability'],
    imageUrl: mitulImage,
    scholarUrl: 'https://scholar.google.com/',
    category: 'lead',
  },
  {
    id: 'lead-2',
    name: 'Nadia Chowdhury',
    role: 'Team Lead, Robotics Unit',
    affiliation: 'KUET',
    specialization: ['Robotics', 'IoT Automation'],
    imageUrl:
      'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80',
    scholarUrl: 'https://scholar.google.com/',
    category: 'lead',
  },
  {
    id: 'lead-3',
    name: 'Arif Rahman',
    role: 'Team Lead, Simulation & AI',
    affiliation: 'RUET',
    specialization: ['Machine Learning', 'GIS Modeling'],
    imageUrl:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=600&q=80',
    scholarUrl: 'https://scholar.google.com/',
    category: 'lead',
  },
  {
    id: 'lead-4',
    name: 'Zara Ahmed',
    role: 'Team Lead, Outreach',
    affiliation: 'Jahangirnagar University',
    specialization: ['Youth Training', 'Community Engagement'],
    imageUrl:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    scholarUrl: 'https://scholar.google.com/',
    category: 'lead',
  },
];
