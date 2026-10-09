export interface ResearchArea {
  id: string;
  unitName: string;
  title: string;
  description: string;
  /** Leave out to show a blank placeholder. */
  imageUrl?: string;
  /** Optional CSS object-position for the card photo, e.g. 'center bottom'. */
  imagePosition?: string;
  leadResearcher?: string;
  publicationsCount?: number;
  tags?: string[];
  focusAreas?: string[];
}
