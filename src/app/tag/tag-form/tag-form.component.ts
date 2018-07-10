import { Tag } from './../../core/tag';
import { TagService } from './../../tag.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NullTemplateVisitor } from '@angular/compiler';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-tag-form',
  templateUrl: './tag-form.component.html',
  styleUrls: ['./tag-form.component.css']
})
export class TagFormComponent implements OnInit {

  constructor(private route: ActivatedRoute, private tagService: TagService) {}

  tag: Tag;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tagService.getById(id).subscribe((tag: Tag) => {
        this.tag = tag;
      });
    } else {
      this.tag = {
        label: '',
        author: null,
        bookmarks: null
      };
    }
  }

  onSubmit() {
    if(this.tag.id) {
      // edition
      this.tagService.update(this.tag).subscribe((tag: Tag) => {
        console.log({ tag });
        this.tag = tag;
      });
    } else {
      // creation
      this.tagService.create(this.tag).subscribe((tag: Tag) => {
        console.log({ tag });
        this.tag = tag;
      });
    }

  }

}
