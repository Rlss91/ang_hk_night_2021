import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind1',
  templateUrl: './bind1.component.html',
  styleUrls: ['./bind1.component.css'],
})
export class Bind1Component implements OnInit {
  title: string;
  constructor() {
    this.title = 'some text';
  }

  ngOnInit(): void {}
}
