import { Component, OnInit , Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { concat } from 'rxjs/operator/concat';
import { Router } from '@angular/router';
import 'rxjs/rx';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Input() otptext:string;
  @Input() phoneno:string;
  @Input() message:string;
  
  ApplicantType: any[];
  isPhoneVerified = false;
  isSMSSent = false;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.authService.getApplicantType().subscribe(obj =>{
      //console.log(obj);
      this.ApplicantType = obj;
    })
  }

  OnSignUp(form:NgForm){
    const userid = form.value.userid;
    const password = form.value.password;
    const type = form.value.type;
    this.authService.Signup(userid, password, type).subscribe(obj => {
      if(obj.user == false){
        this.message = "Some Error Occured. Try Again";
      }
      else{
        this.authService.sessionData = obj.user;
        this.authService.isAuthenticated.next(true);
        this.router.navigate(['/']);
      }
  }, error => this.router.navigate(['/signup']));
  }

  SendOTP(){
    this.authService.SendOTP(this.phoneno).subscribe(obj =>{
        if(obj.OTPSent){
        this.isSMSSent = true;
        this.message = "SMS successfully sent.";
      }
      else{
        this.message = obj.message;
      }
    });
  }

  VerifyOTP(){
    this.authService.VerifyOTP(this.otptext,this.phoneno).subscribe(obj =>{
      if(obj.OTPVerified){
        this.isPhoneVerified = true;
        this.message = "Phone No. verified.";
      }
      else{
        this.message = obj.message;
      }
    });
  }
  OnLoginPage(){
    this.router.navigate(['/signin']);
  }
}
