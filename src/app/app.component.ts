import {Component, Input, OnInit} from '@angular/core';
import { Content, ContentList } from './content-card/content-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Input content: ContentList;
export class AppComponent {
  title = 'JavaScript5-Assignments';
}
