import { Component, OnInit, Input ,OnChanges, Output, EventEmitter} from '@angular/core';
import { CustomFormService } from '../custom-form.service';

import { FormControlModel } from '../form-control.model';
import { AuthService } from '../../auth/auth.service';
import { emit } from 'cluster';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements OnInit, OnChanges {
  @Input() SelectedForm = {
    FormFields:[],
    FormTitle:"",
    FormType:"",
    _id:null
  };
  @Output() FormSaved = new EventEmitter();

  controls : Array<FormControlModel>;
  ProfileFormControlCount = 0;
  ApplicantType;

  ngOnChanges(){
    this.ProfileFormControlCount = this.SelectedForm.FormFields.length;
  }
 
  constructor(private customFormService:CustomFormService, private authService: AuthService) { }

  ngOnInit() {
    this.authService.getApplicantType().subscribe(obj =>{
      //console.log(obj);
      this.ApplicantType = obj;
    })

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
  }

  RemoveControl(index){
    this.SelectedForm.FormFields.splice(index,1);
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
    this.SelectedForm.FormFields.push(newitem);
    this.ProfileFormControlCount++;
  }

  OnSave(){
    //console.log(this.SelectedForm.FormFields);
    this.customFormService.SaveForm(this.SelectedForm.FormFields, this.SelectedForm.FormTitle, this.SelectedForm.FormType, this.SelectedForm._id)
    .subscribe(obj =>{
      if(obj){
        console.log(obj);
        this.SelectedForm._id = obj._id;
        this.FormSaved.emit(this.SelectedForm);
      }
  });
    
  }

  OnOptionChange(i,newvalue,j){
    this.SelectedForm.FormFields[i].options[j] = newvalue;
    //console.log(this.SelectedForm.FormFields[i]);
  }

  AddOption(i){
    var optionlabel = "option"+this.SelectedForm.FormFields[i].optionCount;
    this.SelectedForm.FormFields[i].optionCount++;
    this.SelectedForm.FormFields[i].options.push(optionlabel);
  }

  RemoveOption(controlindex,optionindex){
    this.SelectedForm.FormFields[controlindex].options.splice(optionindex,1);
  }
}
