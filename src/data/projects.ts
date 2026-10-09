import { Project } from '../types/project';

export const projectsData: Project[] = [
  {
    id: 'proj-1',
    title: 'Tannery waste to Bio-diesel',
    description:
      'Transforming industrial hazardous waste to bio diesel by Hydro Thermal Liquifaction process.',
    keyNotes: ['Hydrothermal liquefaction', 'Peptide content', 'TA', 'LCA', 'ASPEN simulation'],
    imageUrls: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
    ],
    imageLabels: ['Hydro Thermal Liquefaction Process'],
    teamLead: 'Farial Orion, Sabbir H Mitul',
    section: 'Waste to Energy',
  },
  {
    id: 'proj-2',
    title: 'Cigarette filter upcycling & turning to thread',
    description:
      'By green solvent extraction process we successfully recycling cigarette filte. Now we developing circular process & yarn systhesis.',
    keyNotes: ['Cellulose acetate', 'Solvent circulation', 'LCA', 'ASPEN simulation'],
    imageUrls: [
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
    ],
    imageLabels: ['Waste cigarette filter solvent recycling process', 'Extracted fiber'],
    teamLead: 'A. R. M. Baizid, Sabbir H Mitul',
    section: 'Polymer & Bio-materials',
  },
  {
    id: 'proj-air-quality',
    title: 'Air Quality & Health Risk',
    description:
      "A machine learning-based air-quality framework integrating satellite, pollutant, and climatic data to predict PM2.5 concentrations and identify priority health-risk zones in Gazipur's SME industrial areas. The approach supports targeted air-quality monitoring, worker protection, healthcare planning, and cleaner industrial policy.",
    keyNotes: ['Satellite Data', 'Machine Learning', 'Spatial Downscaling', 'Health-Risk Zoning'],
    imageUrls: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1000&q=80',
    ],
    teamLead: 'Prottoy',
    section: 'Water & Air Solution',
  },
  {
    id: 'proj-3',
    title: 'Hill Tack Drinking Water Solution',
    description:
      'We are developing a solar-gravimetric hydro reverse osmosis system for high altitude water purifier for a medium community.',
    keyNotes: ['Reverse Osmosis', 'Zero energy', 'Solar', 'Wind Energy', 'GIS', 'ML mechanical modeling'],
    imageUrls: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
    ],
    teamLead: 'Mahjaben Khan, Sabbir H Mitul',
    section: 'Water & Air Solution',
  },
];
