import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomedirectiverenderer]',
})
export class CustomedirectiverendererDirective implements OnInit {
  @Input() defaultBackgroungColor: string = 'transparent';
  @Input() defaultFontColor: string = 'black';
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      this.defaultBackgroungColor
    );
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'color',
      this.defaultFontColor
    );
  }
}
