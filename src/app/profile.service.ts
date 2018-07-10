import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Author } from './core/author';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  API_URL = 'https://bnppf1-bookmarks.herokuapp.com/author/';

  getById(id: string): Observable<Author> {
    return this.http.get<Author>(this.API_URL + id);
  }

  create(author: Author): Observable<Author> {
    return this.http.post<Author>(this.API_URL, author);
  }
}
