import {
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css'],
})
export class LifecycleHooksComponent implements OnInit, OnChanges, DoCheck {
  isAvailable: boolean;
  txt: string;
  constructor() {
    this.isAvailable = true;
    this.txt = '';
    console.log('constructor');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  handleBtnClick(): void {
    this.isAvailable = !this.isAvailable;
    this.txt = 'changed';
  }
}
