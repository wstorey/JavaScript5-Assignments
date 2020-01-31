import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './content-card/content-card-helper';

@Pipe({
  name: 'contentFilter'
})
export class ContentFilterPipe implements PipeTransform {

  transform(book: Content): string {
    return book.type || 'fiction';
  }

  // transform(contentList: Content[], allowNullTags?: boolean): Content[] {
  //   return contentList.filter( (c) => c.tags != null ? c.tags.length !== 0 : null);
  // }

}
