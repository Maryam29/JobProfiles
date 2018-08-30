import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preview-form',
  templateUrl: './preview-form.component.html',
  styleUrls: ['./preview-form.component.css']
})
export class PreviewFormComponent implements OnInit {
  @Input() SelectedForm;
  constructor() { }

  ngOnInit() {
  }

}
