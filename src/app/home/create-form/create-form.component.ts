import { Component, OnInit, Input ,OnChanges, Output, EventEmitter} from '@angular/core';
import { CustomFormService } from '../custom-form.service';
import { AuthService } from '../../auth/auth.service';

import { SectionModel } from '../section.model';
import { FormModel } from '../form.model';
import { FormControlModel } from '../form-control.model';
import { FieldModel } from '../field.model';
var ObjectID = require("bson-objectid");


@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})

export class CreateFormComponent implements OnInit, OnChanges {
  @Input() SelectedForm = new FormModel();
  @Output() FormSaved = new EventEmitter();

  controls : Array<FormControlModel>;
  totalcontrols : number;
  TotalSections = 0;
  ApplicantType;
  FormSuccessMessage = ""

  ngOnChanges(){
      this.TotalSections = this.SelectedForm.Sections.length;
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
        control.Type = obj[i].FieldType;
        control.isMultipleOption = obj[i].isMultipleOption;
        control.Total = 0;
        if(control.isMultipleOption){
          control.optionCount = 1;
        }
        else{
          control.optionCount = 0;
        }
        this.controls.push(control);
      }
      this.totalcontrols = this.controls.length;
      //console.log(this.controls);
    });
  }

  OnSave(){
    //console.log(this.SelectedForm);
    this.customFormService.SaveForm(this.SelectedForm)
    .subscribe(obj =>{
      if(obj){
        this.SelectedForm._id = obj._id;
        this.FormSaved.emit(this.SelectedForm);
        this.FormSuccessMessage = "Form Saved successfully";
      }
      else{
        this.FormSuccessMessage = "Form couldn't be saved."
      }
  });
  }

  OnSelectFormType(event){
    let index: number = event.target["selectedIndex"];
    this.SelectedForm.FormTypeName = this.ApplicantType[index].type;
   // console.log(this.SelectedForm.FormTypeName);
  }

  OnOptionChange(sectionindex,fieldindex,newvalue,optionindex){
    this.SelectedForm.Sections[sectionindex].Fields[fieldindex].options[optionindex] = newvalue;
  }

  AddOption(sectionindex,fieldindex){
    var optionlabel = "Option "+this.SelectedForm.Sections[sectionindex].Fields[fieldindex].options.length;
    this.SelectedForm.Sections[sectionindex].Fields[fieldindex].options.push(optionlabel);
  }

  RemoveOption(sectionindex, fieldindex,optionindex){
    this.SelectedForm.Sections[sectionindex].Fields[fieldindex].options.splice(optionindex,1);
  }

  AddSection(){
    var newSection = new SectionModel();
    newSection.SectionID = ObjectID();
    newSection.SectionName = "Section "+ this.TotalSections;
    newSection.CanBeMultiple = false;
    newSection.Fields = new Array<FieldModel>();
    var fieldcount = 0;
    //Add Fields logic
    for(var i=0;i<this.totalcontrols;i++){
      {
        for(var j=0;j<this.controls[i].Total;j++){
          var newField = new FieldModel();
          newField.FieldID = ObjectID();
          newField.FieldName = "Field "+ fieldcount;
          newField.FieldType = this.controls[i].Type;
          newField.options = new Array();
          var optioncount = this.controls[i].optionCount;

          for(var count=0;count<optioncount;count++){
            var optionlabel = "Option "+count;
            newField.options.push(optionlabel);
          }

          newSection.Fields.push(newField);
          fieldcount++;
        }
      }
    }
    this.SelectedForm.Sections.push(newSection);
    //console.log(this.SelectedForm.Sections);
    this.TotalSections++
  }

  RemoveSection(sectionindex){
    this.SelectedForm.Sections.splice(sectionindex,1);
  }

  AddField(SectionIndex, control:FormControlModel){
    var fieldcount = this.SelectedForm.Sections[SectionIndex].Fields.length;
    var newField = new FieldModel();
    newField.FieldID = ObjectID();
    newField.FieldName = "Field "+fieldcount;
    newField.FieldType = control.Type;
    newField.options = new Array();
    for(var count=0;count<control.optionCount;count++){
      var optionlabel = "Option "+count;
      newField.options.push(optionlabel);
    }
    this.SelectedForm.Sections[SectionIndex].Fields.push(newField);
  }
  
  RemoveField(sectionindex,fieldindex){
    this.SelectedForm.Sections[sectionindex].Fields.splice(fieldindex,1);
  }

}
