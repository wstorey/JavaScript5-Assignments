import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Content } from '../content-card/content-card-helper';
import { ContentService } from '../services/content.service';


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

  title: string;
  author: string;
  body: string;
  imgUrl: string;
  type: string;
  tags: string;
  validator: string;
  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.currentId = this.startingId;
  }

  createContent(title: string, author: string, body: string, imgUrl?: string, type?: string, tags?: string): void {
    const ourPromise = new Promise((success, fail) => {
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
      if (title && author && body) {
        this.currentId++;
        this.newContentEvent.emit(this.newContentItem);
        this.contentService.addContent(this.newContentItem);
        success(`${title} was added successfully`);
      } else {
        fail('Content FAILED to add');
      }
    });
    ourPromise.then(successResult => {
      this.validator = '';
      this.title = '';
      this.author = '';
      this.body = '';
      this.imgUrl = '';
      this.type = '';
      this.tags = '';

      return console.log(successResult);
    })
    .catch(failResult => {
      this.validator = failResult;
    });
  }

}
