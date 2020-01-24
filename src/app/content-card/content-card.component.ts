import { Component, Input, OnInit } from '@angular/core';
import {Content} from './content-card-helper';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  @Input() content: Content;
  constructor() {

  }

  ngOnInit() {

  }
  displayId(item) {
    console.log(`ID of ${item.title} id: ${item.id}`);
  }
}
