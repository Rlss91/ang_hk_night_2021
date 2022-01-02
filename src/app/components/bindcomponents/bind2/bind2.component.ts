import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind2',
  templateUrl: './bind2.component.html',
  styleUrls: ['./bind2.component.css'],
})
export class Bind2Component implements OnInit {
  title: string;
  constructor() {
    this.title = 'sometext';
  }

  ngOnInit(): void {}

  handleBtnClick() {
    this.title = 'you pressed on the btn';
  }
}
