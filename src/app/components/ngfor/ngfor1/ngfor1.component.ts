import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor1',
  templateUrl: './ngfor1.component.html',
  styleUrls: ['./ngfor1.component.css'],
})
export class Ngfor1Component implements OnInit {
  arrOfNumbers: Array<number>;
  constructor() {
    this.arrOfNumbers = [1, 2, 3, 4, 5];
  }

  ngOnInit(): void {}
}
