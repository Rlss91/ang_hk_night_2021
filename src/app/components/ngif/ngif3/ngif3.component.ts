import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif3',
  templateUrl: './ngif3.component.html',
  styleUrls: ['./ngif3.component.css'],
})
export class Ngif3Component implements OnInit {
  isVisible: boolean;
  constructor() {
    this.isVisible = false;
  }

  ngOnInit(): void {}

  handleBtnClick(): void {
    this.isVisible = true;
  }
}
