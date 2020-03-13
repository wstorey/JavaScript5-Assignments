import { Injectable } from '@angular/core';
import { Content} from './content-card/content-card-helper';
import { InMemoryDbService } from 'angular-in-memory-web-api';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContentService } from './services/content.service';
import { CONTENTLIST } from './contentDb';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor(private contentService: ContentService) { }
  createDb() {
    const content = CONTENTLIST;
    return { content };
  }
  genId(content: Content[]): number {
    return content.length > 0 ? Math.max(...content.map(c => c.id)) + 1 : 2000;
  }
}
