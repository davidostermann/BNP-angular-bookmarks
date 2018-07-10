import { Tag } from './../../core/tag';
import { TagService } from './../../tag.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tag-form',
  templateUrl: './tag-form.component.html',
  styleUrls: ['./tag-form.component.css']
})
export class TagFormComponent implements OnInit {

  constructor(private route: ActivatedRoute, private tagService: TagService) { }

  tag: Tag;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.tagService.getById(id).subscribe( (tag: Tag) => {
      this.tag = tag;
    });
  }

  onSubmit() {
    console.log(this.tag);
    this.tagService.update(this.tag).subscribe( (tag: Tag) => {
      console.log({tag});

      this.tag = tag;
    })
  }

}
