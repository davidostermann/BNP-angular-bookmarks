import { TagService } from './../../tag.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tag } from '../../core/tag';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  tag: Tag;

  constructor(private route: ActivatedRoute, private tagService: TagService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // const id2 = this.route.snapshot.params.id;
    // console.log('id : ', id2);

    this.tagService
        .getById(id)
        .subscribe( (tag: Tag) => {
          console.log('tag : ', tag);
          this.tag = tag;
        });
  }

}
