export interface TeamMember {
  id: string;
  name: string;
  role: string;
  affiliation: string;
  specialization: string[];
  imageUrl: string;
  scholarUrl: string;
  category: 'senior' | 'lead';
}
