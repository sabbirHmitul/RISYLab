export interface TeamMember {
  id: string;
  name: string;
  role: string;
  affiliation: string;
  institution?: string;
  specialization: string[];
  imageUrl: string;
  scholarUrl?: string;
  linkedinUrl?: string;
  researchGateUrl?: string;
  job?: string;
  education?: string;
  category: 'senior' | 'lead' | 'practitioner';
}
