import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'firstapp';
  handleBtnClick(event: any) {
    console.log(this.title);
    console.log(event);
  }
}
