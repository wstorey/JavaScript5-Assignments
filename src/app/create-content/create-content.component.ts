import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Content } from '../content-card/content-card-helper';
import { ContentService } from '../services/content.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


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
  constructor(public dialog: MatDialog) {
    this.resetNewBandItem();
  }

  ngOnInit() {
    this.currentId = this.startingId;
  }

  resetNewBandItem() {
    this.newContentItem = {
      title: '',
      author: '',
      body: '',
      imgUrl: '',
      type: '',
      tags: []
    };
  }

  createContent(): void {
    this.newContentEvent.emit(this.newContentItem);
    this.resetNewBandItem();
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateContentComponent, {
      width: '350px',
      data: { newContentItem: this.newContentItem }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog was closed', result);
      this.newContentItem = result;
      this.createContent();
    });
  }
  // createContent(title: string, author: string, body: string, imgUrl?: string, type?: string, tags?: string): void {
  //   this.newContentItem = {
  //     // id: this.currentId,
  //     title,
  //     author,
  //     body,
  //   };
  //   if (imgUrl) {
  //     this.newContentItem.imgUrl = imgUrl;
  //   }
  //   if (type) {
  //     this.newContentItem.type = type;
  //   }
  //   if (tags) {
  //     this.newContentItem.tags = [tags];
  //   }
  //   if (title && author && body) {
  //     this.currentId++;
  //     this.newContentEvent.emit(this.newContentItem);
  //     // this.contentService.addContent(this.newContentItem);
  //
  //     return console.log(`${title} was added successfully`);
  //   } else {
  //     this.validator = 'Content FAILED to add';
  //   }
  // }

}
