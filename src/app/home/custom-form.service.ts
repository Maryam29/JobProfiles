import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { map } from 'rxjs/operators/map';
//import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/observable';
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

    SaveForm(FormFields,FormTitle, FormType, formid){
        return this.http.post('saveForm',{FormFields:FormFields, FormTitle, FormType, formid}).map(res =>{
            if(res.status == 400){
                throw new Error("Couldn't Save Forms");
            }
            else{
                return res.json();
            }
        })
    }

    GetForm(type){
        //console.log("Get form");
        return this.http.post('getForm',{type}).map(res =>{
            if(res.status == 400){
                throw new Error("Couldn't Get Forms");
            }
            else{
                var obj = res.json();
                if(!_.isEmpty(obj))
                return res.json();

                return null;
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
                var obj = res.json();
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
                var obj = res.json();
                console.log(obj);

                if(!_.isEmpty(obj))
                return res.json();

                return null;
            }
        });
    }

    GetApplicantProfile(_id){
        return this.http.post('getApplicantProfile',{_id}).map(res =>{
            if(res.status == 400){
                throw new Error("Couldn't Get Forms");
            }
            else{
                var obj = res.json();
                if(!_.isEmpty(obj))
                return res.json();

                return null;
            }
        });
    }

    UpdateApplicantProfile(oldobj,newobj){
        return this.http.post('UpdateApplicantProfile',{oldobj,newobj}).map(res =>{
            if(res.status == 400){
                throw new Error("Couldn't Get Forms");
            }
            else{
                var obj = res.json();
                console.log(obj);

                if(!_.isEmpty(obj))
                return res.json();

                return null;
            }
        })
    }
}