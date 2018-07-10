import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tag } from './core/tag';
import { Injectable } from '@angular/core';
import { Author } from './core/author';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  API_URL = 'https://bnppf1-bookmarks.herokuapp.com/tag/';

  constructor(private http: HttpClient) {}

  getById(id: string): Observable<Tag> {
    return this.http.get<Tag>(this.API_URL + id);
  }

  getAll(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.API_URL);
  }

  update(tag: Tag): Observable<Tag> {
    return this.http.put<Tag>(this.API_URL + tag.id, tag);
  }

  delete(id: string): Observable<Tag> {
    return this.http.delete<Tag>(this.API_URL + id);
  }

  create(tag: Tag): Observable<Tag> {
    const authoringTag: Tag = { ...tag, author: '5b426e7cc75a0fae804b9c12' };
    return this.http.post<Tag>(this.API_URL, authoringTag);
  }
}
