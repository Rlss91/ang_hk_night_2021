import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-dir',
  templateUrl: './ng-class-dir.component.html',
  styleUrls: ['./ng-class-dir.component.css'],
})
export class NgClassDirComponent implements OnInit {
  isAvailable: boolean;
  constructor() {
    this.isAvailable = false;
  }

  ngOnInit(): void {}

  handleBtnClick(): void {
    this.isAvailable = !this.isAvailable;
  }
}
