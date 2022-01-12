import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks-child',
  templateUrl: './lifecycle-hooks-child.component.html',
  styleUrls: ['./lifecycle-hooks-child.component.css'],
})
export class LifecycleHooksChildComponent
  implements OnInit, OnDestroy, OnChanges
{
  @Input() changeSomething: string = '';
  intervalID: any;
  constructor() {
    console.log('child: constructor');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('child: ngOnInit');
    // this.intervalID = setInterval(() => {
    //   console.log('setInterval');
    // }, 1000);
  }

  ngOnDestroy(): void {
    console.log('child: ngOnDestroy');
    clearInterval(this.intervalID);
  }
}
