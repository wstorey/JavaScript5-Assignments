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
  // set types(type: Content[]) {
  //   this._types = type;
  // }
  // static htmlContent(i: number) {
  //   // return ContentList[i];
  //   return this.htmlContent(ContentList[i]);
  // }
  private _types: Content[];
  constructor() {
    this._types = [];
  }
  get types(): Content[] {
    return this._types;
  }
  static addContentToArray(content: Content, _types: Content[]) {
    this._types.push(content);
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
    // this.cList.types(this.content);
  }

  ngOnInit() {

  }

}
