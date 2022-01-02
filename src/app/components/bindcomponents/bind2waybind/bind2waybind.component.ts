import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind2waybind',
  templateUrl: './bind2waybind.component.html',
  styleUrls: ['./bind2waybind.component.css'],
})
export class Bind2waybindComponent implements OnInit {
  inputText: string;
  constructor() {
    this.inputText = '';
  }

  ngOnInit(): void {}
}
