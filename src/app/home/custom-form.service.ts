import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'util';
import 'rxjs/rx';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CustomFormService {
    constructor(private router: Router, private http: Http) { }

    GetFormControls(){
        return this.http.get('getformcontrols').map(res => {
            if(res.status === 400){
                throw new Error("Couldn't get form controls");
            }
            else{
                return res.json();
            }
        })
    }

    SaveForm(FormFields,FormTitle){
        console.log("service")
        return this.http.post('saveForm',{FormFields:FormFields, FormTitle}).map(res =>{
            if(res.status == 400){
                throw new Error("Couldn't Save Forms");
            }
            else{
                console.log(res);
                return res.json();
            }
        }).subscribe(obj =>{
            return obj;
        })
    }

}