import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CustomFormService } from '../custom-form.service';
import { FormModel } from '../form.model';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-applicant-profile',
  templateUrl: './applicant-profile.component.html',
  styleUrls: ['./applicant-profile.component.css']
})
export class ApplicantProfileComponent implements OnInit {

  Applicant;
  Form: FormModel;
  TemplateList: any[];
  @ViewChild('ApplicantProfile') ApplicantProfile: ElementRef;
  constructor(private route: ActivatedRoute, private router: Router, private customFormService: CustomFormService) { }

  ngOnInit() {
    this.Form = new FormModel();
    this.Applicant = {};

    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.customFormService.GetApplicantProfile(id).subscribe((obj) => {
        if (obj) {
          this.Applicant = obj;
          this.customFormService.GetForm(this.Applicant.type).subscribe((form) => {
            if (form) {
              this.Form = form;
              this.OnSelectForm();
              this.GetAllFormTemplates(this.Form._id);
            }
          });
        }
      });
    });

  }

  OnSelectForm() {
    // Inititally all the fields of the form are displayed.
    for (let sec = 0; sec < this.Form.Sections.length; sec++) {
      const currsec = this.Form.Sections[sec];
      for (let findex = 0; findex < currsec.Fields.length; findex++) {
        currsec.Fields[findex].isFieldChecked = true;
      }
    }
  }

  GetFieldValue(SectionID, index, FieldID) {
    if (this.Applicant[SectionID]) {
      return this.Applicant[SectionID][index][FieldID];
    }
    return '';
  }

  GetSectionCount(SectionID) {
    if (this.Applicant[SectionID]) {
      return this.Applicant[SectionID].length;
    }
    return 0;
  }

  GetAllFormTemplates(formID) {
    this.customFormService.GetTemplatesByFormID(formID).subscribe((temp) => {
      if (temp && temp.length) {
        this.TemplateList = temp;
      }
    });
  }

  CheckedFieldCount(secindex) {
    return this.Form.Sections[secindex].Fields.filter((field) => {
      return field.isFieldChecked === true;
    }).length;
  }

  OnSelectTemplate(val) {
    const index: number = val.target['selectedIndex'];

    if (index === 0) {
      this.OnSelectForm();
    }else {
      const SelectedTemplate = this.TemplateList[index - 1];
      const Section = {};

      for (let sec = 0; sec < this.Form.Sections.length; sec++) {
        const currsec = this.Form.Sections[sec];
        Section[currsec.SectionID] = sec; // storing the index
      }

      for (let i = 0; i < SelectedTemplate.Sections.length; i++) {
        const templatesec = SelectedTemplate.Sections[i];

        // If Section is present in template section look for fields in Template
        if (Section.hasOwnProperty(templatesec.SectionID)) {
          const secindex = Section[templatesec.SectionID];

          const currsec = this.Form.Sections[secindex];
          const formfields = currsec.Fields;

          for (let findex = 0; findex < formfields.length; findex++) {

            const isFieldpresent = templatesec.Fields.filter((field) => {
              return field === formfields[findex].FieldID;
            });

            if (isFieldpresent.length) {
              currsec.Fields[findex].isFieldChecked = true;
            }else {
              currsec.Fields[findex].isFieldChecked = false;
            }

          }
          console.log(SelectedTemplate);
        }
      }
    }

  }

  PrintToPdf() {
    console.log('Export to pdf');

    const doc = new jsPDF();
    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };
    const content = this.ApplicantProfile.nativeElement;
    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers': specialElementHandlers
    });

    console.log(content);
    const filename = 'Applicant' + this.Applicant._id + '.pdf';
    doc.save(filename);
  }
}
