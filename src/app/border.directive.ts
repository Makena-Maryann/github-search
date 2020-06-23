import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBorder]',
})
export class BorderDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.border('2px solid grey');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.border(null);
  }

  private border(action: string) {
    this.el.nativeElement.style.border = action;
  }
}
