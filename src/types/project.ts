export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrls: string[];
  /** Optional label per image; falls back to the project title. */
  imageLabels?: string[];
  teamLead: string;
  teamMembers?: string[];
  keyNotes?: string[];
  section: string;
}
