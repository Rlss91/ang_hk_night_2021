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
  constructor(private authService: AuthServiceService) {
    this.users = this.authService.getUsers();
  }

  ngOnInit(): void {}
}
