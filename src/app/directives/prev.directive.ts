import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  buttonDisabled = 'False';

  constructor(private el : ElementRef) { }

  @HostListener('click')
  prevFunc(){
    var elm = this.el.nativeElement.parentElement.children[2];
    var item = elm.getElementsByClassName('card_new');
    elm.prepend(item[item.length - 1]);
    console.log(item);
  }

}
