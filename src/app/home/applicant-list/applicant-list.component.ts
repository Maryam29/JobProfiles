import { Component, OnInit,Input } from '@angular/core';
import { CustomFormService } from '../custom-form.service';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css']
})
export class ApplicantListComponent implements OnInit{
  AllApplicants : any[];
  FormsList : any[];
  ApplicantsDetails: any[];
  FilterType;
  FilterText:string;
  userFilter:any ={};
  SelectedApplicant = {};

  constructor(private customFormService:CustomFormService){}

  ngOnInit() {
    this.customFormService.GetAllApplicants().subscribe(obj =>{
      if(obj && obj.length){
        this.AllApplicants = obj;
        //console.log(this.AllApplicants);

        this.customFormService.GetAllForms().subscribe(obj =>{
          if(obj && obj.length){
            this.FormsList = obj;
            //console.log(this.FormsList);
          }
          this.CategorizeApplicant();
        });
      }
    });

  }

  OnFilterChange(){
    this.userFilter = {}
    this.userFilter[this.FilterType] = this.FilterText;
    console.log(this.userFilter);
  }

  OnSelectApplicantType(index){
    this.SelectedApplicant = this.ApplicantsDetails[index];
    this.FilterType = "";
    this.FilterText = "";
    this.userFilter = {}
   }
  
  CategorizeApplicant(){
    this.ApplicantsDetails = new Array();
    this.FormsList.forEach((form) => {
      var obj = {};
      obj["type"] = form.FormType;
      obj["fields"] = form.FormFields;
      obj["applicants"] = this.AllApplicants.filter(item => {
        //console.log(item.type);
        return item.type == form.FormType
      });
      obj["count_applicants"] = obj["applicants"].length;
      this.ApplicantsDetails.push(obj);
    })
    //console.log(this.ApplicantsDetails);
  }
}
