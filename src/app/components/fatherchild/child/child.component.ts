import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import Users from '../model/users.model';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() userInput: Users;
  @Output() onUserSelected: EventEmitter<number>;
  constructor() {
    this.userInput = {
      id: 0,
      name: '',
      email: '',
    };
    this.onUserSelected = new EventEmitter<number>();
  }

  ngOnInit(): void {}

  handleBtnClick(userid: number): void {
    console.log('chiled', { userid });
    this.onUserSelected.emit(userid);
  }
}
