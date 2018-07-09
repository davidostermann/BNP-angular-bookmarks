import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tag } from './core/tag';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) { }

  getById(id: string): Observable<Tag> {
    return this.http.get<Tag>('https://bnppf1-bookmarks.herokuapp.com/tag/' + id);
  }
}
