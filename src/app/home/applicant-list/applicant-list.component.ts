import { Component, OnInit } from '@angular/core';
import { CustomFormService } from '../custom-form.service';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css']
})
export class ApplicantListComponent implements OnInit {
  ApplicantsList : any[];
  constructor(private customFormService:CustomFormService){}

  ngOnInit() {
    this.customFormService.GetAllApplicants().subscribe(obj =>{
      if(obj && obj.length){
        this.ApplicantsList = obj;
        console.log(this.ApplicantsList);
      }
    })
  }

}
