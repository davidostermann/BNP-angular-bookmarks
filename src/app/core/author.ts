import { Tag } from './tag';
import { Bookmark } from './bookmark';
export interface Author {
  id?: string;
  firstName: string;
  lastName: string;
  tags?: Tag[];
  bookmarks?: Bookmark[];
}
