import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appCustomedirectivebind]',
})
export class CustomedirectivebindDirective implements OnInit {
  @Input() defaultBackgroungColor: string = 'transparent';
  @Input() defaultFontColor: string = 'black';
  @Input('appCustomedirectivebind') highLightColor: string = 'red';
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    console.log('elRef', this.elRef);
    this.backgroundColor = '';
    this.color = '';
  }
  ngOnInit(): void {
    this.backgroundColor = this.defaultBackgroungColor;
    this.color = this.defaultFontColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highLightColor || this.defaultBackgroungColor;
  }
  @HostListener('mouseout') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultBackgroungColor;
  }
}
