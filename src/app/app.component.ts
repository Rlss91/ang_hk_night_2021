import { Component } from '@angular/core';

import { BtnTypes } from './components/utils/btn-bootstrap/btn-bootstrap.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'firstapp';
  btnType: string;
  constructor() {
    this.btnType = BtnTypes.secondary;
  }
  handleBtnClick(event: any) {
    console.log(this.title);
    console.log(event);
  }
}
