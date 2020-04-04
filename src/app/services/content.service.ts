import { Injectable } from '@angular/core';
import { Content } from '../content-card/content-card-helper';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };
  constructor(private messageService: MessageService, private http: HttpClient) { }

  getContentObs(): Observable<Content[]> {
    this.messageService.add('Content Retrieved!');
    return this.http.get<Content[]>('api/content');
  }
  getContentItem(id: number): Observable<Content> {
    console.log('Observable item', id);
    return this.http.get<Content>('api/content/' + id);
  }
  addContent(content: Content): Observable<Content> {
    this.messageService.add('Content Added!');
    return this.http.post<Content>('api/content', content, this.httpOptions);
  }
  updateContent(content: Content): Observable<any> {
    return this.http.put<Content>('api/content', content, this.httpOptions);
  }
}


