import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[sexyButton]'
})
export class SexyButtonDirective implements OnInit {

  @Input() sexyBtnDefaultColor: string = 'orangered';
  @Input() sexyBtnOnHoverColor: string = 'darkred';


  constructor(private el: ElementRef,
              private rend: Renderer2) {
    console.log(el);
  }

  @HostListener('mouseover')
  onHover(): void {
    this.changeElBgColor(this.sexyBtnOnHoverColor);
  }

  @HostListener('mouseout')
  onBlur(): void {
    this.changeElBgColor(this.sexyBtnDefaultColor);
  }

  ngOnInit() {
    this.changeElBgColor(this.sexyBtnDefaultColor);
  }

  /**
   * Смена цвета заливки элемента
   * @param color цвет
   */
  changeElBgColor(color: string) {
    this.rend.setStyle(this.el.nativeElement, 'background', color);
  }
}
