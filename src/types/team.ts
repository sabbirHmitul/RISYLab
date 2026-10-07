export interface TeamMember {
  id: string;
  name: string;
  role: string;
  affiliation: string;
  institution?: string;
  specialization: string[];
  imageUrl: string;
  scholarUrl: string;
  linkedinUrl?: string;
  category: 'senior' | 'lead' | 'practitioner';
}
