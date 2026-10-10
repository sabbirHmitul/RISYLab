export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  link: string;
  featured?: boolean;
  /** Optional 'Read publications' buttons shown under the text. */
  publications?: { label: string; url: string }[];
}
