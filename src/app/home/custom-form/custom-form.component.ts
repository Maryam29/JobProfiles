import { Component, OnInit } from '@angular/core';
import { CustomFormService } from '../custom-form.service';

import { FormControlModel } from '../form-control.model'
import { concat } from 'rxjs/observable/concat';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements OnInit {
  controls : Array<FormControlModel>;
  FormLabelList: Array<FormControlModel>; // This contains the control type, label and options 
  ProfileFormControlCount = 0;
  FormTitle:string;
  constructor(private customFormService:CustomFormService) { }

  ngOnInit() {
    this.customFormService.GetFormControls().subscribe((obj) =>{
      this.controls = new Array();
      for(var i=0;i<obj.length;i++){
        const control = new FormControlModel();
        control.type = obj[i].FieldType;
        control.label = "";
        control.isMultiField = obj[i].isMultipleOption;
        if(control.isMultiField == 1){
          control.optionCount = 1;
          control.options = ['option0'];
        }
        
        this.controls.push(control);
      }
    });
    this.FormLabelList = new Array();
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
    //console.log(this.FormLabelList);
    this.ProfileFormControlCount++;
  }

  OnSave(){
    //console.log(this.FormLabelList);
    this.customFormService.SaveForm(this.FormLabelList, this.FormTitle);
  }


  OnOptionChange(i,newvalue,j){
    this.FormLabelList[i].options[j] = newvalue;
    //console.log(this.FormLabelList[i]);
  }
  AddOption(i){
    var optionlabel = "option"+this.FormLabelList[i].optionCount;
    this.FormLabelList[i].optionCount++;
    this.FormLabelList[i].options.push(optionlabel);
  }
}
