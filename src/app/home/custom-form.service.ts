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

    SaveForm(FormFields,FormTitle, FormType){
        return this.http.post('saveForm',{FormFields:FormFields, FormTitle, FormType}).map(res =>{
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

    GetForm(type){
        //console.log("Get form");
        return this.http.post('getForm',{type}).map(res =>{
            if(res.status == 400){
                throw new Error("Couldn't Get Forms");
            }
            else{
                console.log(res);
                return res.json();
            }
        });
    }

    GetAllForms(){
        //console.log("Get form");
        return this.http.get('getAllForms').map(res =>{
            if(res.status == 400){
                throw new Error("Couldn't Get Forms");
            }
            else{
                return res.json();
            }
        });
    }

    GetAllApplicants(){
        return this.http.get('getAllApplicants').map(res =>{
            if(res.status == 400){
                throw new Error("Couldn't Get Applicants List");
            }
            else{
                return res.json();
            }
        });
    }

    SaveApplicantForm(ApplicantDetails){
        return this.http.post('saveApplicantData',ApplicantDetails).map(res =>{
            if(res.status == 400){
                throw new Error("Couldn't Get Forms");
            }
            else{
                console.log(res);
                return res.json();
            }
        });
    }
}