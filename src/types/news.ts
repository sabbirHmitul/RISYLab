export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  link: string;
  /** Optional label for the link button (default 'Read Full Story'). */
  linkLabel?: string;
  featured?: boolean;
  /** Optional 'Read publications' buttons shown under the text. */
  publications?: { label: string; url: string }[];
  /** Optional 'Collaboration' tags shown under the publications. */
  collaborators?: string[];
  /** Optional 'Pending publication' labels (pink, not clickable until published). */
  pendingPublications?: string[];
  /** Optional 'Awarded by' tags shown under the text. */
  awardedBy?: string[];
  /** Optional 'Thanks & follow' links shown under the text. */
  thanks?: { label: string; url: string }[];
  /** Optional YouTube video ID; on the News page the video is shown instead of the photo. */
  youtubeId?: string;
  /** Optional fixed photo height (px) on computer screens. */
  imageHeight?: number;
}
