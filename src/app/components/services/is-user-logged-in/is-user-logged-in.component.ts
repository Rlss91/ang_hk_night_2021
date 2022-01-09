import { Component, OnInit } from '@angular/core';
import {
  AuthServiceService,
  UserService,
} from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-is-user-logged-in',
  templateUrl: './is-user-logged-in.component.html',
  styleUrls: ['./is-user-logged-in.component.css'],
})
export class IsUserLoggedInComponent implements OnInit {
  users: UserService[];
  usersOnline: number;
  constructor(private authService: AuthServiceService) {
    this.users = this.authService.getUsers();
    this.usersOnline = 0;
    authService.userChange.subscribe((val) => {
      console.log(val);
      // this.usersOnline = 0;
      // for (let user of this.users) {
      //   if (user.isLoggedin) {
      //     this.usersOnline++;
      //   }
      // }
      if (val == 'userLoggedin') {
        this.usersOnline++;
      }
      if (val == 'userLoggedout') {
        this.usersOnline--;
      }
      console.log(this.usersOnline);
    });
  }

  ngOnInit(): void {}
}
