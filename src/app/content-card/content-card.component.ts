import { Component, OnInit } from '@angular/core';

export interface Content {
  readonly id: number;
  author: string;
  imgUrl?: string;
  type?: string;
  title: string;
  body: string;
  // ????????
  tags?: string[];
}

class ContentList {
  private _types: Content[];
  constructor() {
    this._types = [];
  }
  get types(): Content[] {
    return this._types;
  }
  // static????
  addContentToArray(content: Content) {
    this._types.push(content);
  }
  countContentArray() {
    return this._types.length;
  }
  htmlContent(i: number) {
    console.log(this._types[i]);
    return this._types[i];
  }
}

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  content: Content;
  cList: ContentList;
  constructor() {
    this.content = {
      id: 1,
      author: 'Will',
      imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
      type: 'tech',
      title: 'This Is The Title',
      body: 'This is the body content',
      tags: ['tech', 'Will']
    };
    this.cList = new ContentList();
    this.cList.addContentToArray(this.content);
  }

  ngOnInit() {
    this.cList.addContentToArray(this.content);
  }

}
