import {Directive, ElementRef, HostListener} from '@angular/core';
import {getAttributeValue} from 'codelyzer/util/getAttributeValue';

@Directive({
  selector: '[appDecoration]'
})
export class DecorationDirective {

  constructor(private elm: ElementRef) { }

  @HostListener('mouseover') onHoverUnderline() {
    this.elm.nativeElement.style.textDecoration = 'underline';
  }

  @HostListener('mouseout') outOfHover() {
    this.elm.nativeElement.style.textDecoration = 'none';
  }

  setDecoration(c): void {

  }
}
