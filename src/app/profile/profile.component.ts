import { Author } from './../core/author';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  author: Author = {
    firstName: '',
    lastName: ''
  };

  constructor(private profileService: ProfileService) { }

  ngOnInit() {

  }

  create() {
    this.profileService.create(this.author).subscribe( (author) => {
      console.log('créé !');
      this.author = author;
      // https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage
      localStorage.profileId = author.id;
    }, (err) => {
      console.log('error !', err);
    });
  }

}
