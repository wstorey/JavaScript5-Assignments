import {Component, Input, OnInit} from '@angular/core';
import {LogUpdateService} from './log-update.service';
// import {Content, ContentList} from './content-card/content-card.component';
// import { Content, ContentList } from './content-card/content-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'JavaScript5-Assignments';
  constructor(private logService: LogUpdateService) {}
}
