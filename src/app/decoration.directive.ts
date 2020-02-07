import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {getAttributeValue} from 'codelyzer/util/getAttributeValue';

@Directive({
  selector: '[appDecoration]'
})
export class DecorationDirective {

  @Input() decoration: string;
  constructor(private elm: ElementRef) { }

  @HostListener('mouseover') onHover() {
    this.setDecoration(this.decoration);
  }

  @HostListener('mouseout') outOfHover() {
    this.removeDecoration(this.decoration);
  }

  setDecoration(decoration): void {
    if (decoration === 'underline') {
      this.elm.nativeElement.style.textDecoration = decoration;
    } else if (decoration === 'bold') {
      this.elm.nativeElement.style.fontWeight = decoration;
    }
    return;
  }
  removeDecoration(decoration): void {
    if (decoration === 'underline') {
      this.elm.nativeElement.style.textDecoration = 'none';
    } else if (decoration === 'bold') {
      this.elm.nativeElement.style.fontWeight = 'normal';
    }
    return;
  }
}
