import { Component, OnInit } from '@angular/core';
import { Content } from '../content-card/content-card-helper';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  content: Content[];

  constructor() { }

  ngOnInit() {
    this.content = [
      {
        id: 1,
        author: 'Will',
        imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
        type: 'tech',
        title: 'This Is The Title',
        body: 'This is the body content',
        tags: ['tech', 'Will']
      },
      {
        id: 2,
        author: 'Will',
        imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
        type: 'tech',
        title: 'This Is The Title',
        body: 'This is the body content',
        tags: ['tech', 'Will']
      },
      {
        id: 3,
        author: 'Will',
        imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
        type: 'tech',
        title: 'This Is The Title',
        body: 'This is the body content',
        tags: ['tech', 'Will']
      },
      {
        id: 4,
        author: 'Will',
        imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
        type: 'tech',
        title: 'This Is The Title',
        body: 'This is the body content',
        tags: ['tech', 'Will']
      },
      {
        id: 5,
        author: 'Will',
        imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
        type: 'tech',
        title: 'This Is The Title',
        body: 'This is the body content',
        tags: ['tech', 'Will']
      },
      {
        id: 6,
        author: 'Will',
        imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
        type: 'tech',
        title: 'This Is The Title',
        body: 'This is the body content',
        tags: ['tech', 'Will']
      }
    ];
  }

}
