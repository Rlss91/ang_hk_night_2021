import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif1',
  templateUrl: './ngif1.component.html',
  styleUrls: ['./ngif1.component.css'],
})
export class Ngif1Component implements OnInit {
  isVisible: boolean;
  constructor() {
    this.isVisible = false;
  }

  ngOnInit(): void {}

  handleBtnClick(): void {
    this.isVisible = true;
  }
}
