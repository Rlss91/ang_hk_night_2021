import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-user-logged-in',
  templateUrl: './user-logged-in.component.html',
  styleUrls: ['./user-logged-in.component.css'],
})
export class UserLoggedInComponent implements OnInit {
  email: string;
  password: string;
  constructor(private authService: AuthServiceService) {
    this.email = 'kenny';
    this.password = '1234';
  }

  handleLoginClick(): void {
    console.log({ email: this.email, password: this.password });
    this.authService.userLogin(this.email, this.password);
  }

  handleLogoutClick(): void {
    this.authService.userLogout(this.email);
  }

  ngOnInit(): void {}
}
