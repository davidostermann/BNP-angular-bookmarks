import { Tag } from './tag';
import { Author } from './author';
export interface Bookmark {
  id?: string;
  title: string;
  description: string;
  link: string;
  author: Author;
  tags: Tag[];
}
