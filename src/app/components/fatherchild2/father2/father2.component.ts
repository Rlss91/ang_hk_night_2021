import { Component, OnInit } from '@angular/core';
import User from 'src/app/model/User.model';

@Component({
  selector: 'app-father2',
  templateUrl: './father2.component.html',
  styleUrls: ['./father2.component.css'],
})
export class Father2Component implements OnInit {
  usersArr: User[];

  constructor() {
    this.usersArr = [
      {
        id: 0,
        name: 'kenny',
        email: 'kenny@gmail.com',
        description: '43kjtnw34ktljnt tw k34jtn wk34t wl34kjt',
      },
      {
        id: 1,
        name: 'benny',
        email: 'benny@gmail.com',
        description: '43kjtnw34ktljnt tw k34jtn wk34t wl34kjt',
      },
      {
        id: 2,
        name: 'eric',
        email: 'eric@gmail.com',
        description: '43kjtnw34ktljnt tw k34jtn wk34t wl34kjt',
      },
      {
        id: 3,
        name: 'neria',
        email: 'neria@gmail.com',
        description: '43kjtnw34ktljnt tw k34jtn wk34t wl34kjt',
      },
      {
        id: 4,
        name: 'shlomo',
        email: 'shlomo@gmail.com',
        description: '43kjtnw34ktljnt tw k34jtn wk34t wl34kjt',
      },
    ];
  }

  ngOnInit(): void {}

  handleDelete(id: number): void {
    // console.log(id);
    this.usersArr = this.usersArr.filter((value) => value.id != id);
  }
  /*
  create father component with list of names and display the list with child component
  when pressing on child component the father should display the id of the child that was
  selected
  */
}
