import { Project } from '../types/project';

export const projectsData: Project[] = [
  {
    id: 'proj-1',
    title: 'Tannery waste to Bio-diesel',
    description: ' Transforming industrial hazardous waste to bio diesel by Hydro Thermal Liquifaction process.',
    imageUrls: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
    ],
    teamLead: 'Farial Orion, Sabbir H Mitul',
    teamMembers: ['Hydrothermal liquefaction', 'Peptide content', 'TA', 'LCA', 'ASPEN simulation'],
    section: 'Waste to Energy',
  },
  {
    id: 'proj-2',



        title: 'Cigarette filter upcycling & turning to thread',
    description: 'By green solvent extraction process we successfully recycling cigarette filte. Now we developing circular process & yarn systhesis.',
    imageUrls: [
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
    ],
    teamLead: ' A. R. M. Baizid, Sabbir H Mitul',
    teamMembers: [ 'Cellulose acetate', 'Solvent circulation', 'LCA', 'ASPEN simulation' ],
    section: 'Polymer & Bio-materials',
  },
  {
    id: 'proj-3',
    title: 'Hill Tack Drinking Water Solution',
    description: 'We are developing a solar-gravimetric hydro reverse osmosis system for high altitude water purifier for a medium community.',
    imageUrls: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
    ],
    teamLead: 'Mahjaben Khan, Sabbir H Mitul',
    teamMembers: ['Reverse Osmosis', 'Zero energy', 'Solar', 'Wind Energy', 'GIS', 'ML mechanical modeling'],
    section: 'Water & Air Solution',
  },
];