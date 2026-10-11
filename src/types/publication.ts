export interface Publication {
  id: string;
  title: string;
  journal: string;
  year?: number;
  authors: string[];
  doi?: string;
  imageUrl: string;
  /** Optional link for the title (article page) */
  url?: string;
  /** Optional full publication date shown instead of year, e.g. 2025/3/15 */
  date?: string;
  /** Optional acknowledgements shown instead of the author line */
  thanks?: string[];
  /** Optional badge on the card corner, e.g. citation count "45+" or "Q1" */
  badge?: string;
}
