import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css'],
})
export class NgswitchComponent implements OnInit {
  number: number;
  constructor() {
    this.number = 5;
  }

  ngOnInit(): void {}
}
