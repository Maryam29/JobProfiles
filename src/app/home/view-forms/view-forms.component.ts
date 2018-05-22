import { Component, OnInit } from '@angular/core';
import { CustomFormService } from '../custom-form.service';

@Component({
  selector: 'app-view-forms',
  templateUrl: './view-forms.component.html',
  styleUrls: ['./view-forms.component.css']
})
export class ViewFormsComponent implements OnInit {
  FormsList : any[];
  SelectedForm;
  isSelected:boolean = false;
  FormsCount:number = 0;
  constructor(private customFormService:CustomFormService){}

  ngOnInit() {
    this.customFormService.GetAllForms().subscribe(obj =>{
      if(obj && obj.length){
        this.FormsList = obj;
        this.FormsCount = this.FormsList.length;
        //console.log(this.FormsList);
      }
    })
  }

  OnSelectForm(index){
    this.isSelected = true;
    //console.log(this.FormsList[index]);
    this.SelectedForm = this.FormsList[index];
  }

}
