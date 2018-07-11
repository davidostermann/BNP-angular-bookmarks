import { Tag } from './../../core/tag';
import { TagService } from './../../tag.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tag-form',
  templateUrl: './tag-form.component.html',
  styleUrls: ['./tag-form.component.css']
})
export class TagFormComponent implements OnInit {

  // en cas d'erreur
  errorMsg: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tagService: TagService) {}

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
    if (this.tag.id) {
      // edition
      this.tagService.update(this.tag).subscribe((tag: Tag) => {
        console.log({ tag });
        // this.tag = tag;
        this.router.navigateByUrl('/tags');
      }, (err) => {
        console.log({err});
      });
    } else {
      // creation
      this.tagService.create(this.tag).subscribe((tag: Tag) => {
        console.log({ tag });
        // this.tag = tag;
        this.router.navigateByUrl('/tags');
      }, (err: Error) => {
        console.log({ err });
        this.errorMsg = err.message;
      });
    }

  }

}
