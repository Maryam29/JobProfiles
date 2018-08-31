import { Component, OnInit, Input , OnChanges, Output, EventEmitter} from '@angular/core';
import { CustomFormService } from '../custom-form.service';
import { AuthService } from '../../auth/auth.service';

import { SectionModel } from '../section.model';
import { FormModel } from '../form.model';
import { FormControlModel } from '../form-control.model';
import { FieldModel } from '../field.model';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
const ObjectID = require('bson-objectid');


@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})

export class CreateFormComponent implements OnInit, OnChanges {
  @Input() SelectedForm = new FormModel();
  @Output() FormSaved = new EventEmitter();

  Error: string;
  controls: Array<FormControlModel>;
  totalcontrols: number;
  TotalSections = 0;
  ApplicantType;
  FormSuccessMessage = 0;

  ngOnChanges() {
      this.TotalSections = this.SelectedForm.Sections.length;
  }

  constructor(private customFormService: CustomFormService, private authService: AuthService) { }

  ngOnInit() {
    this.authService.getApplicantType().subscribe(obj => {
      // console.log(obj);
      this.ApplicantType = obj;
    });

    this.customFormService.GetFormControls().subscribe((obj) => {
      this.controls = new Array();
      for (let i = 0 ; i < obj.length; i++) {
        const control = new FormControlModel();
        control.Type = obj[i].FieldType;
        control.isMultipleOption = obj[i].isMultipleOption;
        control.Total = 0;
        control.Table = obj[i].Table ? obj[i].Table : '';
        control.ParentType = obj[i].parent ? obj[i].parent : '';
        if (control.isMultipleOption) {
          control.optionCount = 1;
        }else {
          control.optionCount = 0;
        }
        this.controls.push(control);
      }
      this.totalcontrols = this.controls.length;
      // console.log(this.controls);
    });
  }

  OnSave() {
    // console.log(this.SelectedForm);
    this.customFormService.SaveForm(this.SelectedForm)
    .subscribe(obj => {
      if (obj) {
        this.SelectedForm._id = obj._id;
        this.FormSaved.emit(this.SelectedForm);
        this.FormSuccessMessage = 1;
      }else {
        this.FormSuccessMessage = -1;
      }
  });
  }

  OnSelectFormType(event) {
    const index: number = event.target['selectedIndex'];
    this.SelectedForm.FormTypeName = this.ApplicantType[index].type;
   // console.log(this.SelectedForm.FormTypeName);
  }

  OnOptionChange(sectionindex, fieldindex, newvalue, optionindex) {
    this.SelectedForm.Sections[sectionindex].Fields[fieldindex].options[optionindex] = newvalue;
  }

  AddOption(sectionindex, fieldindex) {
    const optionlabel = 'Option ' + this.SelectedForm.Sections[sectionindex].Fields[fieldindex].options.length;
    this.SelectedForm.Sections[sectionindex].Fields[fieldindex].options.push(optionlabel);
  }

  RemoveOption(sectionindex, fieldindex, optionindex) {
    this.SelectedForm.Sections[sectionindex].Fields[fieldindex].options.splice(optionindex, 1);
  }

  AddSection() {
    const newSection = new SectionModel();
    newSection.SectionID = ObjectID();
    newSection.SectionName = 'Section ' +  this.TotalSections;
    newSection.CanBeMultiple = false;
    newSection.Fields = new Array<FieldModel>();
    this.SelectedForm.Sections.push(newSection);
    this.TotalSections++;
  }

  RemoveSection(sectionindex) {
    this.SelectedForm.Sections.splice(sectionindex, 1);
  }

  AddParentField(sectionIndex, fieldindex, SelectedParent) {
    // Add the Parent Field
    SelectedParent = JSON.parse(SelectedParent);
    const ParentSectionId = SelectedParent.SectionID.toString();
    const ParentFieldId = SelectedParent.FieldID.toString();
    const DependentSectionId = this.SelectedForm.Sections[sectionIndex].SectionID.toString();
    const DependentFieldId = this.SelectedForm.Sections[sectionIndex].Fields[fieldindex].FieldID.toString();
    const DependentFieldName = this.SelectedForm.Sections[sectionIndex].Fields[fieldindex].FieldName;

    // -- Add the selected Parent to Field's ParentField-- //
    this.SelectedForm.Sections[sectionIndex].Fields[fieldindex].ParentField.FieldID = SelectedParent.FieldID;
    this.SelectedForm.Sections[sectionIndex].Fields[fieldindex].ParentField.SectionID = SelectedParent.SectionID;

    // --Add to Parent Field's Dependency List-- //
    const ParentSection = this.SelectedForm.Sections.find(sec => sec.SectionID.toString() === ParentSectionId);
    if (ParentSection) {
      const ParentField = ParentSection.Fields.find(field => field.FieldID.toString() === ParentFieldId);
      if (ParentField) {
        // Push only if its not already in dependent list.
        if (! ParentField.DependentFieldList.find(field => field.FieldID.toString() === DependentFieldId)) {
          ParentField.DependentFieldList.push({FieldID: DependentFieldId, SectionID: DependentSectionId});
        }
        }
    }
}

  GetParentList(sectionIndex, CurrField: FieldModel) {
    const ParentFieldType = CurrField.ParentField.FieldType;
    let FieldList;
    for (let secind = 0; secind < this.SelectedForm.Sections.length; secind++) {
       FieldList = this.SelectedForm.Sections[secind].Fields.filter( field => {
        return field.FieldType === ParentFieldType;
      }).map((elem, findex) => {
        return {
          FieldID: elem.FieldID.toString(),
          FieldName: elem.FieldName + '(' + this.SelectedForm.Sections[secind].SectionName + ',' + findex + ')',
          // If same freld Name for multiple Columns, So specify Sectioname and Field Index
          SectionID: this.SelectedForm.Sections[secind].SectionID.toString()
        };
      });
      if (FieldList.length > 0) {
        // Merge the Parent List Array with FieldList(List of Fields with Parent Field Type) obtained above.
        Array.prototype.push.apply(CurrField.ParentField.FieldList, FieldList);
      }
    }
    if (CurrField.ParentField.FieldList.length !== 0) {
      this.SelectedForm.Sections[sectionIndex].Fields.push(CurrField);
    }else {
      this.Error = 'No ' + CurrField.ParentField.FieldType + ' Field Found. Add ' + CurrField.ParentField.FieldType + ' Field First.' ;
    }
  }

  AddField(SectionIndex, control: FormControlModel) {
    const fieldcount = this.SelectedForm.Sections[SectionIndex].Fields.length;
    const newField = new FieldModel();
    newField.FieldID = ObjectID();
    newField.FieldName = 'Field ' + fieldcount;
    newField.FieldType = control.Type;
    newField.Table = control.Table;
    newField.ParentField = {FieldType: control.ParentType, FieldList: new Array(), FieldID: null, SectionID: null};
    newField.DependentFieldList = new Array();
    newField.options = new Array();
    if (control.Table !== '') {
      if (control.ParentType) {
        this.GetParentList(SectionIndex, newField);
      }else {
        this.SelectedForm.Sections[SectionIndex].Fields.push(newField);
        // this.GetOptionsinList(control, fieldcount, SectionIndex);
      }
    }else {
      for (let count = 0; count < control.optionCount; count++) {
      const optionlabel = 'Option ' + count;
      newField.options.push(optionlabel);
    }
    this.SelectedForm.Sections[SectionIndex].Fields.push(newField);
    }
  }

  RemoveField(sectionindex, fieldindex) {
    const currFieldId = this.SelectedForm.Sections[sectionindex].Fields[fieldindex].FieldID.toString();
    const currSectionId = this.SelectedForm.Sections[sectionindex].SectionID.toString();

    const currFieldParentSectionId = this.SelectedForm.Sections[sectionindex].Fields[fieldindex].ParentField.SectionID;
    const currFieldParentFieldId = this.SelectedForm.Sections[sectionindex].Fields[fieldindex].ParentField.FieldID;

    const DepedentFields = this.SelectedForm.Sections[sectionindex].Fields[fieldindex].DependentFieldList; // only fieldId and SectionId

    // Remove this Field from all dependent Fields
    for (let i = 0; i < DepedentFields.length; i++) {

      const DependentSectionId = DepedentFields[i].SectionID.toString();
      const DependentFieldId = DepedentFields[i].FieldID.toString();

      // Search for dependent SectionId and FieldId in all Sections. when found remove currfield from its parent field List
      const DependentSection = this.SelectedForm.Sections.find(sec => sec.SectionID.toString() === DependentSectionId);
      if (DependentSection) {
        const DependentField = DependentSection.Fields.find(field => field.FieldID.toString() === DependentFieldId);
        if (DependentField) {
          if (DependentField.ParentField.FieldID === currFieldId) {
            DependentField.ParentField.FieldID = null;
          }
          // Removing CurrField from Dependent Field's ParentList
          DependentField.ParentField.FieldList = DependentField.ParentField.FieldList
                                                                .reduce((p, c) => (c.FieldID !== currFieldId && p.push(c), p), []);
         // Add code to check if parent fieldlist is empty after this operation then?
        }
      }
  }
  // Remove this Field from Parent Field
  if (currFieldParentFieldId !== null) {
    const ParentSection = this.SelectedForm.Sections.find(sec => sec.SectionID.toString() === currFieldParentSectionId.toString());
    if (ParentSection) {
      const ParentField = ParentSection.Fields.find(field => field.FieldID.toString() === currFieldParentFieldId.toString());
      // Removing Curr Field from Parent Field's Dependency List
      if (ParentField) {
        ParentField.DependentFieldList = ParentField.DependentFieldList
                                                              .reduce((p, c) => (c.FieldID !== currFieldId && p.push(c), p), []);
      }
    }
  }
  // Remove this Field from Curr Section Fields Array
  this.SelectedForm.Sections[sectionindex].Fields.splice(fieldindex, 1);
  }

  GetFieldName(sectionId, fieldId) {
    const ParentSection = this.SelectedForm.Sections.find(sec => sec.SectionID.toString() === sectionId.toString());
    if (ParentSection) {
      const ParentField = ParentSection.Fields.find(field => field.FieldID.toString() === fieldId.toString());
      if (ParentField) {
        return ParentField.FieldName;
        }
    }
  }

  GetOptionsinList(control: FormControlModel, fieldIndex, SectionIndex) {
    if (control.ParentType === '') {
      switch (control.Table) {
        case 'Countries':
          this.customFormService.getCountries().subscribe(obj => {
            // console.log(obj);
            for (let count = 0; count < obj.length; count++) {
            const optionlabel = obj[count].CountryName;
            this.SelectedForm.Sections[SectionIndex].Fields[fieldIndex].options.push(optionlabel);
          }
        });
        break;

        case 'CompanyName':
        // this.authService.getStates().subscribe(obj => {
        //   // console.log(obj);
        //   this.ApplicantType = obj;
        // });
        break;
      }
    }
  }

}
