import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appCustomdirective]',
})
export class CustomdirectiveDirective implements OnInit {
  @Input() defaultBackgroungColor: string = 'transparent';
  @Input() defaultFontColor: string = 'black';
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    console.log('elRef', this.elRef);
    this.backgroundColor = '';
    this.color = '';
  }
  ngOnInit(): void {
    this.elRef.nativeElement.style.backgroundColor =
      this.defaultBackgroungColor;
    this.elRef.nativeElement.style.color = this.defaultFontColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.defaultBackgroungColor);
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', this.defaultFontColor);
    // this.backgroundColor = this.defaultBackgroungColor;
    // this.color = this.defaultFontColor;
  }
}
