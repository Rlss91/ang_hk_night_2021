import { Component, OnInit } from '@angular/core';

import Users from '../model/users.model';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css'],
})
export class FatherComponent implements OnInit {
  usersArr: Array<Users>;
  constructor() {
    this.usersArr = [
      { id: 0, name: 'kenny', email: 'kenny@sp.com' },
      { id: 1, name: 'kartman', email: 'kartman@sp.com' },
      { id: 2, name: 'shlomo', email: 'shlomo@sp.com' },
      { id: 3, name: 'lenny', email: 'lenny@sp.com' },
      { id: 4, name: 'kyle', email: 'kyle@sp.com' },
    ];
  }

  ngOnInit(): void {}

  handeDeleteUser(event: number): void {
    console.log('father', { event });
    this.usersArr = this.usersArr.filter((user) => user.id != event);
  }
}
