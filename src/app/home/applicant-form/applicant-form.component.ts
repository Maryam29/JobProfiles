import { Component, OnInit } from '@angular/core';
import { CustomFormService } from '../custom-form.service';
import { AuthService } from '../../auth/auth.service';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';
import { concat } from 'rxjs/operator/concat';

@Component({
  selector: 'app-applicant-form',
  templateUrl: './applicant-form.component.html',
  styleUrls: ['./applicant-form.component.css']
})
export class ApplicantFormComponent implements OnInit {
  type:string;
  isApplicationFilled:boolean;
  fieldcount : number;
  FormFields = new Array();
  ProfileForm : FormGroup;
  FormTitle: string;
  sessionData;
  ProfileDetails;
  isSelected=new Array();
  constructor(private customFormService:CustomFormService,private authService:AuthService, private fb : FormBuilder) { }

  ngOnInit() {
    //console.log(this.authService.sessionData);
    this.sessionData = this.authService.sessionData;
    this.type = this.sessionData.type;
    this.ProfileForm = this.fb.group({
      customcontrols:new FormArray([])
    });

    this.GetApplicantProfile();
  }

  onSaveForm(){
    const FormControlsList = this.ProfileForm.get('customcontrols') as FormArray;
    var FormValues = FormControlsList.value;

    var obj = {_id:  this.sessionData._id, type:this.sessionData.type};

    for(var i=0;i<this.FormFields.length;i++){
      var label = this.FormFields[i].label;

      if(this.FormFields[i].type === "Checkbox"){
        obj[label] = new Array();
        for(var j=0;j<this.FormFields[i].optionCount;j++){
          if(FormValues[i][j]){
            obj[label].push(this.FormFields[i].options[j]);
          }
        }
      }
      else{
        obj[label] = FormValues[i];
      }
    }
    this.customFormService.SaveApplicantForm(obj).subscribe(res =>{
      //console.log(res);
      if(res){
        this.isApplicationFilled = true;
        this.ProfileDetails = res;
      }
    });
  }

  EditField(index){
    //console.log(index);
    this.isSelected[index] = true;
  }

  checkOptionInProfile(option,index){
    var label = this.FormFields[index].label;

    if(this.ProfileDetails[label] && this.ProfileDetails[label].length>0)
    return this.ProfileDetails[label].includes(option);
    else
    return false;
  }

  onSaveField(index){
    var oldobj = {_id:  this.sessionData._id};
    var newobj = {}

    const FormControlsList = this.ProfileForm.get('customcontrols') as FormArray;
    var FormValues = FormControlsList.value[index];
    var label = this.FormFields[index].label;

    if(this.FormFields[index].type === "Checkbox"){
      newobj[label] = new Array();
      for(var j=0;j<this.FormFields[index].optionCount;j++){
        if(FormValues[j]){
          newobj[label].push(this.FormFields[index].options[j]);
        }
      }
    }
    else{
      newobj[label] = FormValues;
    }

    if(newobj[label] === this.ProfileDetails[label]){
      console.log("no change");
    }
    else{
      this.customFormService.UpdateApplicantProfile(oldobj,newobj).subscribe((res) => {
        if(res){
          this.ProfileDetails = res;
        }
      this.isSelected[index] = false;
      })
    }
  }

  GetApplicantProfile(){
    this.customFormService.GetApplicantProfile(this.sessionData._id).subscribe((obj) => {
      if(obj){
        this.isApplicationFilled = true;
        this.ProfileDetails = obj;
      }
      else{
        this.isApplicationFilled = false;
      }
      this.GetEmptyForm();
    });
  }


  GetEmptyForm(){
    this.customFormService.GetForm(this.type).subscribe((obj) =>{

      if(obj){
        //console.log(obj);
        this.FormTitle = obj.FormTitle;
        
        this.FormFields = obj.FormFields
        if(obj.FormFields)
          this.fieldcount = obj.FormFields.length;
        for(var i=0; i<this.fieldcount;i++){
          
          this.isSelected[i] = false;
          if(this.FormFields[i].type == 'Checkbox'){

            const newArray = new FormArray([]);
            for(var count=0;count<this.FormFields[i].optionCount;count++){
              var option = this.FormFields[i].options[count];
              var optioncontrol;

              if(this.checkOptionInProfile(option,i)){
                optioncontrol = new FormControl(true);
              }
              else
                optioncontrol = new FormControl(false);

              newArray.push(optioncontrol);
            }
            const FormControlsList = this.ProfileForm.get('customcontrols') as FormArray;
            FormControlsList.push(newArray);
          }
          else{
            var newcontrol;
            var val = this.ProfileDetails[this.FormFields[i].label];
            if(val){
              newcontrol = new FormControl(val, Validators.required);
            }
            else{
              newcontrol = new FormControl(null, Validators.required);
            }

            const FormControlsList = this.ProfileForm.get('customcontrols') as FormArray;
            //FormControlsList.add
            FormControlsList.push(newcontrol);
          }
        }
      }
      
    });
  }
}
