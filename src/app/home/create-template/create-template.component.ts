import { Component, OnInit } from '@angular/core';
import { CustomFormService } from '../custom-form.service';
import { FormModel } from '../form.model';
import { TemplateModel } from '../template.model';
import { SectionModel } from '../Section.model';
import { FieldModel } from '../field.model';

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.css']
})
export class CreateTemplateComponent implements OnInit {
  TemplatesList: any[];
  FormsList: FormModel[];
  isFieldChecked: any[];
  SelectedForm: FormModel;
  createMode: boolean;
  FieldCheckedCount: number;
  TemplateTitle: string;
  TemplateID: string;
  TotalFieldsChecked: number;
  TemplateSaved = 0;

  constructor(private customFormService: CustomFormService) { }

  ngOnInit() {
    this.GetAllTemplates();
    this.GetAllForms();
  }

  GetAllTemplates() {
    this.customFormService.GetAllTemplates().subscribe(obj => {
      if (obj && obj.length) {
        this.TemplatesList = obj;
      }
    });
  }

  GetAllForms() {
    this.customFormService.GetAllForms().subscribe(obj => {
      if (obj && obj.length) {
        this.FormsList = obj;
      }
    });
  }

  OnEditTemplate(index) {
    const SelectedTemplate = this.TemplatesList[index];
    this.TemplateTitle = SelectedTemplate.TemplateTitle;
    this.TemplateID = SelectedTemplate._id;
    const Form = this.FormsList.filter(form => {
      return form._id === SelectedTemplate.FormID;
    });

    if (Form.length) {
      this.SelectedForm = Form[0];
      this.TotalFieldsChecked = 0;
      const Section = {};

      // Check if Form section is present in the selected Template Sections
      for (let sec = 0; sec < this.SelectedForm.Sections.length; sec++) {
        const currsec = this.SelectedForm.Sections[sec];
        Section[currsec.SectionID] = sec; // storing the index
      }

      for (let i = 0; i < SelectedTemplate.Sections.length; i++) {
        const templatesec = SelectedTemplate.Sections[i];

        // If Section is present in template section look for fields in Template
        if (Section.hasOwnProperty(templatesec.SectionID)) {
          const secindex = Section[templatesec.SectionID];

          const currsec = this.SelectedForm.Sections[secindex];
          const formfields = currsec.Fields;

          for (let findex = 0; findex < formfields.length; findex++) {

            const isFieldpresent = templatesec.Fields.filter((field) => {
              return field === formfields[findex].FieldID;
            });

            if (isFieldpresent.length) {
              currsec.Fields[findex].isFieldChecked = true;
              this.TotalFieldsChecked++;
            }else {
              currsec.Fields[findex].isFieldChecked = false;
            }

          }
          // console.log(this.SelectedForm);
        }
      }
    }
    this.createMode = true;
  }

  OnSelectForm(val) {

    const index: number = val.target['selectedIndex'];
    this.SelectedForm = this.FormsList[index - 1]; // 'Select Form is also 0th option'
    for (let sec = 0; sec < this.SelectedForm.Sections.length; sec++) {
      const currsec = this.SelectedForm.Sections[sec];
      for (let findex = 0; findex < currsec.Fields.length; findex++) {
        currsec.Fields[findex].isFieldChecked = true;
        this.TotalFieldsChecked++;
      }
    }
  }

  ToggleFieldSelection(secindex, fieldindex) {
    this.SelectedForm.Sections[secindex].Fields[fieldindex].isFieldChecked = !this.SelectedForm.Sections[secindex].Fields[fieldindex]
                                                                                                                  .isFieldChecked;
    if (this.SelectedForm.Sections[secindex].Fields[fieldindex].isFieldChecked) {
      this.TotalFieldsChecked++;
    }else {
      this.TotalFieldsChecked--;
    }
  }

  CheckedFieldCount(secindex) {
    return this.SelectedForm.Sections[secindex].Fields.filter((field) => {
      return field.isFieldChecked === true;
    }).length;
  }

  OnCreateTemplate() {
    this.createMode = true;
    this.SelectedForm = new FormModel();
    this.TemplateTitle = 'Template Title';
    this.TemplateID = null;
    this.SelectedForm.Sections = new Array();
    this.TotalFieldsChecked = 0;
  }

  OnSaveTemplate() {
    const template = {
      FormID: this.SelectedForm._id,
      FormType: this.SelectedForm.FormType,
      TemplateTitle: this.TemplateTitle,
      _id: this.TemplateID
    };
    template['Sections'] = new Array();

    for (let secindex = 0; secindex < this.SelectedForm.Sections.length; secindex++) {
      const fields = this.SelectedForm.Sections[secindex].Fields;
      const currsec = this.SelectedForm.Sections[secindex];

      const checkedfields = fields.filter(field => {
        return field.isFieldChecked === true;
      }).map(field => {
        return field.FieldID;
      });

      if (checkedfields.length > 0) {
        const currobj = {};
        currobj['SectionID'] = currsec.SectionID;
        currobj['Fields'] = checkedfields;
        template['Sections'].push(currobj);
      }
    }

    this.customFormService.SaveTemplate(template).subscribe((obj) => {
      if (obj) {
        this.GetAllTemplates();
        this.TemplateSaved = 1;
      }else {
        this.TemplateSaved = -1;
      }
    });
  }
}
