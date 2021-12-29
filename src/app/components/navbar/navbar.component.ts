import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  navBarArray: string[];
  isVisible: boolean;

  constructor() {
    this.navBarArray = ['Home', 'About us', 'Contact us', 'Me'];
    this.isVisible = false;
  }

  ngOnInit(): void {}

  handleTxtKeyPress(event: any): void {
    console.log(event);
    if (event.keyCode == 13) {
      console.log('you pressed enter');
    }
  }
  handleTxtKeyUpEnter(event: Event): void {
    console.log(event);
  }
  handleSearchClick(): void {
    this.isVisible = true;
  }
}
