import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Content} from '../content-card/content-card-helper';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {

  @Input() startingId;
  @Output() newContentEvent = new EventEmitter<Content>();
  newContentItem: Content;
  currentId: number;
  constructor() { }

  ngOnInit() {
    this.currentId = this.startingId;
  }

  createContent(title: string, author: string, body: string, imgUrl?: string, type?: string, tags?: string): void {
    this.newContentItem = {
      id: this.currentId,
      title,
      author,
      body
    };
    if (imgUrl) {
      this.newContentItem.imgUrl = imgUrl;
    }
    if (type) {
      this.newContentItem.type = type;
    }
    if (tags) {
      this.newContentItem.tags = [tags];
    }
    this.currentId++;
    this.newContentEvent.emit(this.newContentItem);
    console.log(this.newContentItem);
  }

}
