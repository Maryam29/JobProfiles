import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'util';
import 'rxjs/rx';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {
    isAuthenticated = new Subject<boolean>();
    constructor(private router: Router, private http: Http) { }

    Signin(userid, password) {
        console.log(userid,password);
        return this.http.post(`login`, { username: userid, password: password }).map(res => {
            if (res.status === 400) {
                this.router.navigate(['/signin']);
                throw new Error("" + res.status);
            }
            else {
                return res.json();
            }
        })
    }

    Signup(userid, password) {
        return this.http.post(`register`, {userid:userid, password: password }).map(res => {
           if (res.status == 400) {
                this.router.navigate(['/signup']);
                throw new Error(""+res.status);
            }
            else {
                return res.json();
            }
        });
    }

    isSessionOpen() {
        console.log("isSession Open");
        return this.http.get(`isSessionOpen`).map(res => {
            if (res.status !== 200)
                throw new Error("Couldn't authenticate. Some Error Occured" + res.status);
            else {
                var obj = res.json();
                console.log(obj);
                if (obj.isSessionOpen === true) {
                    this.isAuthenticated.next(true);
                    return true;
                }
                else {
                    this.isAuthenticated.next(false);
                    return false;
                }
            }
        });
    }

    SendOTP(phoneno){
        console.log("SendOTP Auth")
       return this.http.post('sendOTP',{phoneno:phoneno}).map(res =>{
            if(res.status == 400){
                throw new Error("Couldn't Verify. Some Error Occured" + res.status);
            }
            else{
              return res.json();
            }
          })
        }

    VerifyOTP(otp, phoneno){
        console.log("Verify OTP")
        return this.http.post('verifyOTP',{phoneno:phoneno, otp:otp}).map(res =>{
             if(res.status == 400){
                 throw new Error("Couldn't Verify. Some Error Occured" + res.status);
             }
             else{
               return res.json();
             }
           })
    }
    // Logout() {
    //     return this.http.get('logout').subscribe(obj => {
    //         this.router.navigate(['/signin']);
    //         console.log("Logged out successfully");
    //         this.isAuthenticated.next(false);
    //     })
    // }

}