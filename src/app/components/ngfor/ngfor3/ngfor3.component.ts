import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor3',
  templateUrl: './ngfor3.component.html',
  styleUrls: ['./ngfor3.component.css'],
})
export class Ngfor3Component implements OnInit {
  arrOfNumbers: Array<number>;
  constructor() {
    this.arrOfNumbers = [1, 2, 3, 4, 5];
  }

  ngOnInit(): void {}
}
