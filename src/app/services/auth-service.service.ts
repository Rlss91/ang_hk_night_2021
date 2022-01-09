import { Injectable, EventEmitter } from '@angular/core';

export interface UserService {
  email: string;
  password: string;
  isLoggedin: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  usersArr: UserService[];
  userChange: EventEmitter<any>;
  constructor() {
    this.userChange = new EventEmitter<any>();
    this.usersArr = [
      { email: 'kenny', password: '1234', isLoggedin: false },
      { email: 'john', password: '1234', isLoggedin: false },
    ];
  }

  getUsers(): UserService[] {
    return this.usersArr;
  }

  userLogin(email: string, password: string): boolean {
    let success: boolean = false;
    for (let user of this.usersArr) {
      if (email.toLowerCase() === user.email) {
        if (password === user.password) {
          user.isLoggedin = true;
          success = true;
          this.userChange.emit('userChanged');
          break;
        }
      }
    }
    return success;
  }

  userLogout(email: string): void {
    for (let user of this.usersArr) {
      if (email.toLowerCase() === user.email) {
        user.isLoggedin = false;
        this.userChange.emit('userChanged');
        break;
      }
    }
  }
}
