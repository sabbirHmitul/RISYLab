export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  teamLead: string;
  teamMembers: string[];
  section: 'Section X' | 'Section Y';
}
