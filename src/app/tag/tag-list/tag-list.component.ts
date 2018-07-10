import { Observable } from 'rxjs';
import { Tag } from './../../core/tag';
import { Component, OnInit } from '@angular/core';
import { TagService } from '../../tag.service';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {
  tags: Tag[] = [];

  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.tagService.getAll().subscribe(list => {
      this.tags = list;
    });
  }

  delete(id: string) {
    this.tagService.delete(id).subscribe(
      () => {
        console.log('bien supprimé !');
        this.refresh();
      },
      (err) => {
        console.log({err});
        this.refresh();
      });
  }



}
