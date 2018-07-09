import { Bookmark } from './../../core/bookmark';
import { BookmarkService } from './../../bookmark.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  bookmarks: Bookmark[] = [];
  constructor(private bookmarkSercice: BookmarkService) { }

  ngOnInit() {
    this.bookmarkSercice.getAll().subscribe( (list) => {
      console.log(list);
      this.bookmarks = list;
    });
  }

  selectTag(id) {
    console.log('id : ', id);
  }

}
