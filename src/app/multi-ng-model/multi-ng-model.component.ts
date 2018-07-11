import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-ng-model',
  templateUrl: './multi-ng-model.component.html',
  styleUrls: ['./multi-ng-model.component.css']
})
export class MultiNgModelComponent implements OnInit {

  list = [
    { name: 'coucou1', ig: 13},
    { name: 'coucou2', ig: 23},
    { name: 'coucou3', ig: 14},
    { name: 'coucou4', ig: 12}
  ];

  constructor() { }

  ngOnInit() {
  }

}
