import { Component, OnInit } from '@angular/core';
import { Content } from '../content-card/content-card-helper';
import { ContentService } from '../services/content.service';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  content: Content[];
  titleBinding: string;
  rippleColour = '#9C27B0';

  constructor(private contentService: ContentService) {
    this.content = [];
  }

  ngOnInit() {
    // this.titleBinding = 'Book Title';
    this.contentService.getContentObs().subscribe(c => this.content = c);
  }
  findTitle(title: string): void {
    // const resultMsg = document.querySelector('.search-container .result-field') as HTMLElement;
    let found = false;
    this.content.forEach(c => {
      if (c.title === title) {
        found = true;
      }
    });

    if (found) {
      this.titleBinding = `${title} was found`;
    } else {
      this.titleBinding = `${title} was not found`;
    }
    return;
  }

  addContentToList(newContentEvent): void {
    this.contentService.addContent(newContentEvent)
      .subscribe(c => {
        this.content.push(c)
        const clonedContentArray = Object.assign([], this.content);
        this.content = clonedContentArray;
      });
    console.log(this.content);
  }
}
