import { Component, OnInit } from '@angular/core';
import { CustomFormService } from '../custom-form.service';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';

import { FormControlModel } from '../form-control.model'
import { concat } from 'rxjs/observable/concat';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements OnInit {
  controls : Array<FormControlModel>;
  ProfileForm : FormGroup;
  FormLabelList: Array<FormControlModel> = []; // This contains the control type, label and options 
  ProfileFormControlCount = 0;
  constructor(private customFormService:CustomFormService, private fb : FormBuilder) { }

  ngOnInit() {
    this.customFormService.GetFormControls().subscribe((obj) =>{
      this.controls = new Array();
      for(var i=0;i<obj.length;i++){
        const control = new FormControlModel();
        control.type = obj[i].FieldType;
        control.label = "";
        control.isMultiField = obj[i].IsMultipleOption;
        if(control.isMultiField == 1){
          control.optionCount = 1;
          control.options = ['option0'];
        }
        
        this.controls.push(control);
        this.ProfileForm = this.fb.group({
          customcontrols:new FormArray([])
        });
      }
    });
    //this.ProfileForm = new FormGroup({});
  }

  AddControl(control){

    const labelname = "Label"+ this.ProfileFormControlCount;
    const newitem = new FormControlModel();
    newitem.label = labelname;
    newitem.type = control.type;
    newitem.optionCount = control.optionCount;
    //console.log(control.optionCount);
    newitem.options = new Array();
    for(var count=0;count<newitem.optionCount;count++){
      var optionlabel = "option"+count;
      newitem.options.push(optionlabel);
    }
    
    this.FormLabelList.push(newitem);
    if(control.type == 'checkbox'){
      const newArray = new FormArray([]);
      for(var count=0;count<control.optionCount;count++){
        const optioncontrol = new FormControl(false);
        newArray.push(optioncontrol);
      }
      const FormControlsList = this.ProfileForm.get('customcontrols') as FormArray;
      FormControlsList.push(newArray);
    }
    else{
      const newcontrol = new FormControl(null);
      const FormControlsList = this.ProfileForm.get('customcontrols') as FormArray;
      FormControlsList.push(newcontrol);
    }
    // console.log(FormControlsList);
    this.ProfileFormControlCount++;
  }

  onSave(){
    console.log(this.FormLabelList);
    console.log(this.ProfileForm.controls);
  }


  OnOptionChange(i,newvalue,j){
    console.log(newvalue);
    this.FormLabelList[i].options[j] = newvalue;
    console.log(this.FormLabelList[i]);
  }

}
