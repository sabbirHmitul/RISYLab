export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrls: string[];
  teamLead: string;
  teamMembers?: string[];
  keyNotes?: string[];
  section: string;
}
