import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { concat } from 'rxjs/operator/concat';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  OnSignUp(form:NgForm){
    const userid = form.value.userid;
    const password = form.value.password;
    this.authService.Signup(userid, password);
  }
}
