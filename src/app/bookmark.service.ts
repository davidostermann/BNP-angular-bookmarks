import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bookmark } from './core/bookmark';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Bookmark[]> {
    return this.http.get<Bookmark[]>('https://bnppf1-bookmarks.herokuapp.com/bookmark');
  }
}
