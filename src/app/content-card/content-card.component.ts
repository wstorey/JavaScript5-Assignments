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
  static contentCount;
  private _types: Content[];
  constructor() {
    this._types = [];
    ContentList.increaseCount();
  }
  get types(): Content[] {
    return this._types;
  }
  set types(i: Content[]) {
    this._types = i;
  }
  static increaseCount() {
    return ContentList.contentCount++;
  }
}

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
