import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Content } from './content-card/content-card-helper';

// @ts-ignore
@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: string): SafeHtml {
    let c: Content;
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

}
