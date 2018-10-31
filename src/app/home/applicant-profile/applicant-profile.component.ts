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
  format_1 = true;
  format_2 = false;
  isProfileLoaded = false;
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

          console.log(this.Applicant);
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
    this.isProfileLoaded = true;
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
      console.log(index);

      if(index==1){
        this.format_1 = true; 
        this.format_2 = false; 
      }else if(index==2){
        this.format_2 = true;
        this.format_1 = false; 
      }
      // const SelectedTemplate = this.TemplateList[index - 1];
      // const Section = {};

      // for (let sec = 0; sec < this.Form.Sections.length; sec++) {
      //   const currsec = this.Form.Sections[sec];
      //   Section[currsec.SectionID] = sec; // storing the index
      // }

      // for (let i = 0; i < SelectedTemplate.Sections.length; i++) {
      //   const templatesec = SelectedTemplate.Sections[i];

      //   // If Section is present in template section look for fields in Template
      //   if (Section.hasOwnProperty(templatesec.SectionID)) {
      //     const secindex = Section[templatesec.SectionID];

      //     const currsec = this.Form.Sections[secindex];
      //     const formfields = currsec.Fields;

      //     for (let findex = 0; findex < formfields.length; findex++) {

      //       const isFieldpresent = templatesec.Fields.filter((field) => {
      //         return field === formfields[findex].FieldID;
      //       });

      //       if (isFieldpresent.length) {
      //         currsec.Fields[findex].isFieldChecked = true;
      //       }else {
      //         currsec.Fields[findex].isFieldChecked = false;
      //       }

      //     }
      //     console.log(SelectedTemplate);
      //   }
      // }

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
    //const content = this.ApplicantProfile.nativeElement;
    const content = document.getElementById('printable_format_1');
    // doc.fromHTML(content.innerHTML, 15, 15, {
    // 'width': 190,
    // 'elementHandlers': specialElementHandlers
    // });
    let popupWinindow;
    popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWinindow.document.open();
    popupWinindow.document.write('<html><head><style>body{margin: 50px 50px;font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;}.table-bordered {border: 1px solid #ddd;}.table {width: 100%;max-width: 100%;margin-bottom: 20px;border-collapse: collapse;}.table-bordered>tbody>tr>td,.table-bordered>tbody>tr>th{border: 1px solid #ddd;text-align:left;padding:8px}</style></head><body onload="window.print()">' + content.innerHTML + '</html>');
    popupWinindow.document.close();

    // console.log(content);
    // const filename = 'Applicant' + this.Applicant._id + '.pdf';
// doc.save(filename);
}
PrintToPdf_2() {
    console.log('Export to pdf');

    const doc = new jsPDF();
    const specialElementHandlers = {
    '#editor': function (element, renderer) {
    return true;
    }
    };
    //const content = this.ApplicantProfile.nativeElement;
    const content = document.getElementById('printable_format_2');
    // doc.fromHTML(content.innerHTML, 15, 15, {
    // 'width': 190,
    // 'elementHandlers': specialElementHandlers
    // });
    let popupWinindow;
    popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWinindow.document.open();
    popupWinindow.document.write('<html><head><style>body{margin: 50px 50px;font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;}.table-bordered {border: 1px solid #000;}.table {width: 100%;max-width: 100%;margin-bottom: 20px;border-collapse: collapse;}.table-bordered>tbody>tr>td,.table-bordered>tbody>tr>th{border: 1px solid #000;text-align:left;padding:8px}</style></head><body onload="window.print()">' + content.innerHTML + '</html>');
    popupWinindow.document.close();

    // console.log(content);
    // const filename = 'Applicant' + this.Applicant._id + '.pdf';
// doc.save(filename);
}

  PrintToPdf_bk() {
    console.log('Export to pdf');

    const doc = new jsPDF();
    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };
    const content = document.getElementById('printable');//this.ApplicantProfile.nativeElement;
    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers': specialElementHandlers
    });



    console.log(content);
    const filename = 'Applicant' + this.Applicant._id + '.pdf';
    doc.save(filename);
  }
}
