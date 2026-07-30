export interface ResearchArea {
  id: string;
  unitName: string;
  title: string;
  description: string;
  imageUrl: string;
  leadResearcher?: string;
  publicationsCount?: number;
  tags?: string[];
  focusAreas?: string[];
}
