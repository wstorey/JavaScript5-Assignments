import { Component, OnInit } from '@angular/core';
import { Content } from '../content-card/content-card-helper';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  content: Content[];

  constructor() {  }

  ngOnInit() {
    this.content = [
      {
        id: 1,
        author: 'Will',
        imgUrl: 'https://i.ytimg.com/vi/kkg9BhISfdA/maxresdefault.jpg',
        type: 'fiction',
        title: 'Non-Video Video Essay on Anime',
        body: 'Looking at my favourite shows in a word-to-eye format.',
        tags: ['fiction', 'Will']
      },
      {
        id: 2,
        author: 'Luca',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Brindis_%2824675281395%29.jpg',
        type: 'fiction',
        title: 'Water',
        body: 'A fluid novel',
        // tags: ['fiction', 'Luca']
      },
      {
        id: 3,
        author: 'Draven',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Shades_of_light_blue.png',
        type: 'tech',
        title: 'The Sky is Blue',
        body: 'Why tho?',
        tags: ['environmental science', 'Draven']
      },
      {
        id: 4,
        author: 'Jack',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Competitive_table_tennis.jpg',
        type: 'Table',
        title: 'Table',
        body: 'The true story',
        tags: ['table?', 'Jack']
      },
      {
        id: 5,
        author: 'Nathan',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Hello_World_Brian_Kernighan_1978.jpg',
        type: 'tech',
        title: 'Hello World',
        body: 'My first program - psychological look into Hello World',
        tags: ['tech', 'Nathan']
      },
      {
        id: 6,
        author: 'Will',
        imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
        type: 'tech',
        title: 'This Is should not show up',
        body: 'Look away',
        tags: ['Nah']
      }
    ];
  }
}
