import { Component, OnInit,Input, ViewChildren, QueryList } from '@angular/core';
import { CustomFormService } from '../custom-form.service';
import * as _ from 'lodash';
import * as jsPDF from 'jspdf';
import { FormModel } from '../form.model';
import { SectionModel } from '../Section.model';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css']
})
export class ApplicantListComponent implements OnInit{
  AllApplicants : any[];
  FormsList : FormModel[];
  ApplicantsDetails: any[];
  FilterText:string;
  userFilter:any ={};
  PersonalDetailsID = "5b1539c2f5e086aa37d87b6b";  // Should be same across all the forms

  SelectedType = {
    type:"",
    fields:[],
    applicants:[],
    count_applicants:0
  };
  isApplicantFiltered: boolean[];
  isApplicantChecked: boolean[];
  @ViewChildren('ApplicantProfiles') ApplicantProfiles : QueryList<any>;

  constructor(private customFormService:CustomFormService){}

  ngOnInit() {
    
    this.customFormService.GetAllApplicantsPersonalDetails(this.PersonalDetailsID).subscribe(obj =>{
      if(obj && obj.length){
        this.AllApplicants = obj;

        this.customFormService.GetAllForms().subscribe(obj =>{
          if(obj && obj.length){
            this.FormsList = obj;
          }
          this.CategorizeApplicant();
        });
      }
    });

  }

  isEmpty(text){
    return _.isEmpty(text)
  }

  OnSearch(){
  //console.log("OnFilterchnage");
    if(_.isEmpty(this.FilterText)){
      this.isApplicantFiltered.fill(true,0);
    }
    else{
      var searchedtext = _.toLower(this.FilterText);
      
      this.SelectedType.applicants.forEach((item,index) => {
        
          this.SelectedType.fields.some((field) => {
            var val = _.toLower(item[field.FieldName]);
           // console.log(val);
            if(val.indexOf(searchedtext) != -1){
              this.isApplicantFiltered[index] = true;
              return true;
            }
            else{
              this.isApplicantFiltered[index] = false;
            }
          });
      });
    }
  }
  
  OnClearSearch(){
    this.FilterText = "";
    this.isApplicantFiltered.fill(true,0);
  }

  OnSelectApplicantType(index){
    //console.log("OnSelectApplicantType");
    this.SelectedType = this.ApplicantsDetails[index];
    this.FilterText = "";
    this.isApplicantChecked = new Array(this.SelectedType.count_applicants);
    this.isApplicantFiltered = new Array(this.SelectedType.count_applicants);

    this.isApplicantChecked.fill(false,0);
    this.isApplicantFiltered.fill(true,0);
    //console.log(this.isApplicantFiltered);
    //console.log(this.isApplicantChecked);
   }

   ToggleApplicantSelection(index){
     //console.log(this.isApplicantChecked);
    this.isApplicantChecked[index] = !this.isApplicantChecked[index];
   //console.log(this.isApplicantChecked);
   }
   
  CategorizeApplicant(){
    this.ApplicantsDetails = new Array();

    this.FormsList.forEach((form) => {
      var obj = {};
      obj["type"] = form.FormTypeName; //form type
      obj["fields"] = [];

      var section = form.Sections.filter(section => {
        return section.SectionID.includes(this.PersonalDetailsID);
      });

      if(section.length){
        obj["fields"] = section[0].Fields
      }
      
      obj["applicants"] = [];

      //---------For each applicant get Personal Details----------//
      this.AllApplicants.forEach((applicant)=>{
        
        //----Check if Applicant type, is of current Form type and has PersonalDetials section----//
        if(applicant.type === form.FormType && applicant[this.PersonalDetailsID] && applicant[this.PersonalDetailsID].length>0){

          var values = applicant[this.PersonalDetailsID][0]; // values object stores values for differnent field.

          var singleapplicant = {applicantID:applicant._id};
          obj["fields"].forEach(field => {
            singleapplicant[field.FieldName] = values[field.FieldID];
          });
          
          obj["applicants"].push(singleapplicant);
        }
      });
      
      obj["count_applicants"] = obj["applicants"].length;
      this.ApplicantsDetails.push(obj);     //Applicant Details categorizes applicants in number of applicant type category, Each element of ApplicantDetials has list of applicants under that category
    })
    //console.log(this.ApplicantsDetails);
  }

  ExportSelectedProfiles(){
    console.log("Export to pdf");
    this.ApplicantProfiles.forEach((profile,index)=>{
      if(this.isApplicantChecked[index]){

        let doc = new jsPDF();
        let specialElementHandlers = {
          '#editor':function(element,renderer){
            return true;
          }
        };

        let content = profile.nativeElement;
        doc.fromHTML(content.innerHTML,15,15,{
          'width':190,
          'elementHandlers':specialElementHandlers
        });
        var filename = "Applicant"+this.SelectedType.applicants[index]["Name"]+".pdf"
        doc.save(filename);
      }
    })
  }
}
