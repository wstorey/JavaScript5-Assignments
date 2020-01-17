import {Component, Input, OnInit} from '@angular/core';

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

export class ContentList {
  private _types: Content[];
  constructor() {
    this._types = [];
  }
  get types(): Content[] {
    return this._types;
  }
  // static????
  addContentToArray(content: Content): void {
    this._types.push(content);
    return;
  }
  countContentArray(): number {
    return this._types.length;
  }
  htmlContent(i: number): string {
    console.log(this._types[i]);
    const currentContent = this.types[i];
    const outputString = `<p>ID: ${currentContent.id}
                           | Author: ${currentContent.author}
                           | ImgUrl: ${currentContent.imgUrl}
                           | Type: ${currentContent.type}
                           | Body: ${currentContent.body}
                           | Tags: ${currentContent.tags}</p>`;
    // return this._types[i];
    return outputString;
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
    this.content = {
      id: 2,
      author: 'Will',
      imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
      type: 'anime',
      title: 'This Is Another Title',
      body: 'This is still the body content',
      tags: ['anime', 'Will']
    };
    this.cList.addContentToArray(this.content);
    this.content = {
      id: 3,
      author: 'Will',
      imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
      type: 'games',
      title: 'This Is Another ANOTHER Title',
      body: 'This is again, still the body content',
      tags: ['games', 'Will']
    };
    this.cList.addContentToArray(this.content);
  }

  ngOnInit() {

  }
}
