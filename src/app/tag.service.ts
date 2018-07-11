import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tag } from './core/tag';
import { Injectable } from '@angular/core';

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

  create(tag: Tag): Observable<Tag | Error> {
    // si je n'ai pas de profil, alors je retourne une erreur
    if (!localStorage.profileId) {
      console.log('before launching Error');
      return throwError(new Error('profileId is unknown'));
    }

    const authoringTag = {
      ...tag,
      author: localStorage.profileId
    };
    return this.http.post<Tag>(this.API_URL, authoringTag);
  }
}
