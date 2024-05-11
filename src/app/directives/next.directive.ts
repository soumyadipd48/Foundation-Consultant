import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private el : ElementRef) {}

  @HostListener('click')
  nextFunc(){
    var elm = this.el.nativeElement.parentElement.children[2];
    var item = elm.getElementsByClassName('card_new');
    elm.append(item[0]);
    console.log(item);
  }

}
