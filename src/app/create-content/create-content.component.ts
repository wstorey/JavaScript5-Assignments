import {Component, Input, OnInit, Output, EventEmitter, Inject} from '@angular/core';
import { Content } from '../content-card/content-card-helper';
// import { ContentService } from '../services/content.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  newContentItem: Content;
}

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
  rippleColour = '#9C27B0';
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
    const dialogRef = this.dialog.open(CreateContentDialogComponent, {
      width: '350px',
      data: { newContentItem: this.newContentItem }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog was closed', result);
      this.newContentItem = result;
      this.createContent();
    });
  }
}

@Component({
  selector: 'create-content-dialog',
  templateUrl: './create-content-dialog.component.html',
})
export class CreateContentDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CreateContentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    onNoClick(): void {
    this.dialogRef.close();
    }
}
