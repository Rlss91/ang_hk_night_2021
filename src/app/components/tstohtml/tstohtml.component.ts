import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tstohtml',
  templateUrl: './tstohtml.component.html',
  styleUrls: ['./tstohtml.component.css'],
})
export class TstohtmlComponent implements OnInit {
  title: string = 'some text';
  constructor() {}

  ngOnInit(): void {}
}
