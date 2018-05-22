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
  fieldcount : number;
  FormFields = new Array();
  ProfileForm : FormGroup;
  FormTitle: string;
  sessionData;
  constructor(private customFormService:CustomFormService,private authService:AuthService, private fb : FormBuilder) { }

  ngOnInit() {
    //console.log(this.authService.sessionData);
    this.sessionData = this.authService.sessionData;
    this.type = this.sessionData.type;
    this.ProfileForm = this.fb.group({
      customcontrols:new FormArray([])
    });

    this.customFormService.GetForm(this.type).subscribe((obj) =>{

      if(obj){
        //console.log(obj);
        this.FormTitle = obj.FormTitle;
        
        this.FormFields = obj.FormFields
        if(obj.FormFields)
          this.fieldcount = obj.FormFields.length;
        for(var i=0; i<this.fieldcount;i++){

          if(this.FormFields[i].type == 'Checkbox'){

            const newArray = new FormArray([]);
            for(var count=0;count<this.FormFields[i].optionCount;count++){
              const optioncontrol = new FormControl(false);
              newArray.push(optioncontrol);
            }
            const FormControlsList = this.ProfileForm.get('customcontrols') as FormArray;
            FormControlsList.push(newArray);

          }
          else{
            const newcontrol = new FormControl(null, Validators.required);
            const FormControlsList = this.ProfileForm.get('customcontrols') as FormArray;
            //FormControlsList.add
            FormControlsList.push(newcontrol);
          }
        }
      }
      
    });

  }

  onSave(){
    const FormControlsList = this.ProfileForm.get('customcontrols') as FormArray;
    //console.log(FormControlsList.value);

    var FormValues = FormControlsList.value;
    var obj = {_id:  this.sessionData._id};
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
    console.log(obj);
    this.customFormService.SaveApplicantForm(obj).subscribe(res =>{
      console.log(res);
    });
  }

}
