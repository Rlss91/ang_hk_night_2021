import { Component, OnInit } from '@angular/core';

import DataType from './model/dataType.model';

@Component({
  selector: 'app-ngfor2',
  templateUrl: './ngfor2.component.html',
  styleUrls: ['./ngfor2.component.css'],
})
export class Ngfor2Component implements OnInit {
  linksArr: Array<DataType>;
  constructor() {
    this.linksArr = [
      {
        name: 'google',
        url: 'https://www.google.com/',
      },
      {
        name: 'netflix',
        url: 'https://www.netflix.com/il-en/',
      },
    ];
  }

  ngOnInit(): void {}
}
