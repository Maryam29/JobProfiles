import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @Input() message:string;
  constructor(private router:Router, private authService: AuthService) { }

  ngOnInit() {
  }

  OnSignIn(form:NgForm){
    const userid = form.value.userid;
    const password = form.value.password;
    this.authService.Signin(userid, password).subscribe(obj => {
      if(obj.user == false){
          this.message = "Your username or password is incorrect";
      }
      else{
          //console.log("Signin Successful");
          this.authService.isAuthenticated.next(true);
          this.router.navigate(['/']);
      }
  }, error => this.router.navigate(['/signin']));;
  }

  GoToSignup(){
    this.router.navigate(['/signup']);
  }
}