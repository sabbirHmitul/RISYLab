export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrls: string[];
  /** Optional label per image; falls back to the project title. */
  imageLabels?: string[];
  /** Optional per image: 'contain' shows the whole picture (no cropping) on a white background. */
  imageFits?: ('cover' | 'contain')[];
  teamLead: string;
  teamMembers?: string[];
  keyNotes?: string[];
  section: string;
}
