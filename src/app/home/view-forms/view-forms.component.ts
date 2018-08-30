import { Component, OnInit } from '@angular/core';
import { CustomFormService } from '../custom-form.service';
import { FormModel } from '../form.model';
import { SectionModel } from '../Section.model';

@Component({
  selector: 'app-view-forms',
  templateUrl: './view-forms.component.html',
  styleUrls: ['./view-forms.component.css']
})
export class ViewFormsComponent implements OnInit {
  FormsList: FormModel[];
  SelectedForm: FormModel;
  isSelected: Boolean = false;
  FormsCount: Number = 0;
  constructor(private customFormService: CustomFormService) {}

  ngOnInit() {
    this.getAllForms();
  }

  OnSelectForm(index) {
    this.isSelected = true;
    this.SelectedForm = this.FormsList[index];
    console.log(this.SelectedForm);
  }

  OnSaveForm(event) {
    this.SelectedForm = event;
    this.isSelected = true;
    this.getAllForms();
  }

  CreateNewForm() {
    this.SelectedForm = new FormModel();
    this.SelectedForm.Sections = new Array<SectionModel>();
    this.isSelected = true;
  }

  getAllForms() {
    this.customFormService.GetAllForms().subscribe(obj => {
      if (obj && obj.length) {
        this.FormsList = obj;
        this.FormsCount = this.FormsList.length;
      }
    });
  }
}
