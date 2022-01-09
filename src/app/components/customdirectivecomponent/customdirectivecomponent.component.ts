import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customdirectivecomponent',
  templateUrl: './customdirectivecomponent.component.html',
  styleUrls: ['./customdirectivecomponent.component.css'],
})
export class CustomdirectivecomponentComponent implements OnInit {
  isAvaiable: boolean;
  constructor() {
    this.isAvaiable = false;
  }

  handleBtnClick(): void {
    this.isAvaiable = !this.isAvaiable;
  }

  ngOnInit(): void {}
}
