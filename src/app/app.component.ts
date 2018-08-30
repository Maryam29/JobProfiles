import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Job Portal';
  IsAuthenticated = false;
  constructor(private AuthService:  AuthService) {}

  ngOnInit() {
    // console.log("Nginit app compo");
    this.AuthService.isAuthenticated.subscribe((isauth) => {
      // console.log("Set Is Authenticated");
      this.IsAuthenticated = isauth;
    });
  }
}
