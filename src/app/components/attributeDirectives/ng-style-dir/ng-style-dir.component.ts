import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-dir',
  templateUrl: './ng-style-dir.component.html',
  styleUrls: ['./ng-style-dir.component.css'],
})
export class NgStyleDirComponent implements OnInit {
  isAvailable: boolean;
  constructor() {
    this.isAvailable = false;
  }

  ngOnInit(): void {}

  handleBtnClick(): void {
    this.isAvailable = !this.isAvailable;
  }
}
