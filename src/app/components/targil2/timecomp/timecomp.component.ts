import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-timecomp',
  templateUrl: './timecomp.component.html',
  styleUrls: ['./timecomp.component.css'],
})
export class TimecompComponent implements OnInit, OnDestroy {
  intervalID: any;
  timeStr: string;
  showTime: boolean;
  constructor() {
    this.timeStr = '';
    this.showTime = true;
  }

  ngOnInit(): void {
    this.intervalID = setInterval(() => {
      this.timeStr = new Date().toTimeString();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalID);
  }

  handleBtnClick(): void {
    this.showTime = !this.showTime;
  }
}
