import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contentFilter'
})
export class ContentFilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
