import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './content-card/content-card-helper';

@Pipe({
  name: 'contentFilter'
})
export class ContentFilterPipe implements PipeTransform {

  match: Content[];

  transform(book: Content[], type: string): Content[] {
    this.match = [];
    book.forEach((c: Content) => {
      if (c.type === type) {
        this.match.push(c);
      }
    });
    return this.match;
  }

  // transform(contentList: Content[], allowNullTags?: boolean): Content[] {
  //   return contentList.filter( (c) => c.tags != null ? c.tags.length !== 0 : null);
  // }

}
