export interface ResearchArea {
  id: string;
  unitName: string;
  title: string;
  description: string;
  imageUrl: string;
  /** Optional CSS object-position for the card photo, e.g. 'center bottom'. */
  imagePosition?: string;
  leadResearcher?: string;
  publicationsCount?: number;
  tags?: string[];
  focusAreas?: string[];
}
