import { Component, OnInit } from '@angular/core';
import { CustomFormService } from '../custom-form.service';
import { AuthService } from '../../auth/auth.service';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';
import { concat } from 'rxjs/operator/concat';
import { SectionModel } from '../Section.model';

@Component({
    selector: 'app-applicant-form',
    templateUrl: './applicant-form.component.html',
    styleUrls: ['./applicant-form.component.css']
})
export class ApplicantFormComponent implements OnInit {
    type: string;
    isApplicationFilled: boolean;
    fieldcount: number;
    FormFields = new Array();
    Sections = new Array();
    ProfileForm: FormGroup;
    FormTitle: string;
    sessionData;
    ProfileDetails;
    isSelected: any[];
    constructor(private customFormService: CustomFormService, private authService: AuthService, private fb: FormBuilder) { }

    ngOnInit() {
        //console.log(this.authService.sessionData);
        this.sessionData = this.authService.sessionData;
        this.type = this.sessionData.type;
        this.ProfileForm = this.fb.group({
            customcontrols: new FormArray([])
        });

        this.GetApplicantProfile();
    }

    onSaveForm() {
        const FormAllSections = this.ProfileForm.get('customcontrols') as FormArray;
        var FormValues = FormAllSections.value;
        //console.log(FormValues);

        var obj = { _id: this.sessionData._id, type: this.sessionData.type };
        for (var secindex = 0; secindex < this.Sections.length; secindex++) {
            obj[this.Sections[secindex].SectionID] = [];

            for (var subsecindex = 0; subsecindex < this.Sections[secindex].count; subsecindex++) {
                var fieldsobj = {};
                for (var i = 0; i < this.Sections[secindex].Fields.length; i++) {
                    var field = this.Sections[secindex].Fields[i];
                    var fieldid = field.FieldID;
                    var fieldvalue = FormValues[secindex][subsecindex][i];
                    //console.log(fieldvalue);

                    if (field.FieldType === "Checkbox") {
                        fieldsobj[fieldid] = new Array();
                        for (var j = 0; j < field.options.length; j++) {
                            if (fieldvalue[j]) {
                                fieldsobj[fieldid].push(field.options[j]);
                            }
                        }
                    }
                    else {
                        fieldsobj[fieldid] = fieldvalue;
                    }
                }
                obj[this.Sections[secindex].SectionID].push(fieldsobj);
            }
        }
        //console.log(obj);

        this.customFormService.SaveApplicantForm(obj).subscribe(res => {
            //console.log(res);
            if (res) {
                this.isApplicationFilled = true;
                this.ProfileDetails = res;
            }
        });
    }

    EditField(sectionindex) {
        this.Sections[sectionindex].isEditMode = true;
    }

    GetFieldValue(SectionID, subindex, FieldID) {
        var existingsubindex = this.ProfileDetails[SectionID];
        var no_subindex = existingsubindex.length;

        if (subindex < no_subindex) {
            return existingsubindex[subindex][FieldID];
        }
        return "";
    }
    //----------------For Checkbox---------------//
    checkOptionInProfile(sectionid, subsectionindex, option, fieldid) {
        if (this.ProfileDetails[sectionid][subsectionindex][fieldid] && this.ProfileDetails[sectionid][subsectionindex][fieldid].length > 0)
            return this.ProfileDetails[sectionid][subsectionindex][fieldid].includes(option);
        else
            return false;
    }

    onSaveSection(secindex) {

        var obj = {};
        var oldobj = { _id: this.sessionData._id };

        const FormAllSections = this.ProfileForm.get('customcontrols') as FormArray;
        var FormValues = FormAllSections.value;
        //console.log(FormValues);
        obj[this.Sections[secindex].SectionID] = [];

        for (var subsecindex = 0; subsecindex < this.Sections[secindex].count; subsecindex++) {
            var fieldsobj = {};
            for (var findex = 0; findex < this.Sections[secindex].Fields.length; findex++) {
                var field = this.Sections[secindex].Fields[findex];
                var fieldid = field.FieldID;
                //console.log(fieldid);
                var fieldvalue = FormValues[secindex][subsecindex][findex];
                //console.log(fieldvalue);
                if (field.FieldType === "Checkbox") {
                    fieldsobj[fieldid] = new Array();
                    for (var j = 0; j < field.options.length; j++) {
                        if (fieldvalue[j]) {
                            fieldsobj[fieldid].push(field.options[j]);
                        }
                    }
                }
                else {
                    fieldsobj[fieldid] = fieldvalue;
                }
            }
            obj[this.Sections[secindex].SectionID].push(fieldsobj);
        }
        this.customFormService.UpdateApplicantProfile(oldobj, obj).subscribe((res) => {
            if (res) {
                this.ProfileDetails = res;
            }
            this.Sections[secindex].isEditMode = false;
        })
    }

    GetApplicantProfile() {
        this.customFormService.GetApplicantProfile(this.sessionData._id).subscribe((obj) => {
            if (obj) {
                this.isApplicationFilled = true;
                this.ProfileDetails = obj;
                this.CreateForm();
            }
            else {
                this.isApplicationFilled = false;
                console.log(this.type);
                this.CreateEmptyForm();
            }
        });
    }


    CreateForm() {
        this.customFormService.GetForm(this.type).subscribe((obj) => {
            this.Sections = new Array();

            if (obj) {
                this.FormTitle = obj.FormTitle;
                var FormAllSections = this.ProfileForm.get('customcontrols') as FormArray;

                for (var i = 0; i < obj.Sections.length; i++) {

                    let currsection = obj.Sections[i];
                    var existingdetails = this.ProfileDetails[obj.Sections[i].SectionID];
                    //console.log(existingdetails);

                    var isSectionDetailAvailable = false;

                    if (existingdetails.length > 0) {
                        currsection.count = existingdetails.length;
                        isSectionDetailAvailable = true;
                    }
                    else {
                        currsection.count = 1;
                    }
                    currsection.isEditMode = false;
                    this.Sections.push(currsection);
                    var fields = currsection.Fields;
                    //console.log(currsection);

                    const Formcurrsection = new FormArray([]);
                    for (var j = 0; j < currsection.count; j++) {
                        var Formfields = new FormGroup({});

                        for (var findex = 0; findex < fields.length; findex++) {

                            if (fields[findex].FieldType == 'Checkbox') {
                                const checkboxoptionArray = new FormArray([]);

                                for (var count = 0; count < fields[findex].options.length; count++) {
                                    var option = fields[findex].options[count];
                                    var optioncontrol;

                                    if (isSectionDetailAvailable) {
                                        if (this.checkOptionInProfile(obj.Sections[i].SectionID, j, option, fields[findex].FieldID)) {
                                            optioncontrol = new FormControl(true, Validators.required);
                                        }
                                        else
                                            optioncontrol = new FormControl(false, Validators.required);
                                    }
                                    else {
                                        optioncontrol = new FormControl(false, Validators.required);
                                    }
                                    checkboxoptionArray.push(optioncontrol);
                                }
                                Formfields.addControl(findex.toString(), checkboxoptionArray);
                            }
                            else {
                                var newcontrol;
                                if (isSectionDetailAvailable) {
                                    var val = existingdetails[j][fields[findex].FieldName];
                                    if (val) {
                                        newcontrol = new FormControl(val, Validators.required);
                                    }
                                    else {
                                        newcontrol = new FormControl(null, Validators.required);
                                    }
                                }
                                else {
                                    newcontrol = new FormControl(null, Validators.required);
                                }
                                Formfields.addControl(findex.toString(), newcontrol);
                            }
                        }
                        //console.log(j);
                        Formcurrsection.push(Formfields);
                    }
                    FormAllSections.push(Formcurrsection);
                }
                console.log(FormAllSections);
            }
        });

    }

    CreateEmptyForm() {
        console.log(this.type);
        this.customFormService.GetForm(this.type).subscribe((obj) => {
            this.Sections = new Array();
            if (obj) {
                this.FormTitle = obj.FormTitle;
                const FormAllSections = this.ProfileForm.get('customcontrols') as FormArray;

                for (var i = 0; i < obj.Sections.length; i++) {

                    let currsection = obj.Sections[i];
                    currsection.count = 1;
                    currsection.isEditMode = false;

                    this.Sections.push(currsection);
                    var fields = currsection.Fields;

                    const Formcurrsection = new FormArray([]);
                    for (var j = 0; j < currsection.count; currsection++) {
                        var Formfields = new FormGroup({});

                        for (var findex = 0; findex < fields.length; findex++) {

                            if (fields[findex].FieldType == 'Checkbox') {
                                const checkboxoptionArray = new FormArray([]);

                                for (var count = 0; count < fields[findex].options.length; count++) {
                                    var option = fields[findex].options[count];
                                    var optioncontrol;
                                    optioncontrol = new FormControl(false, Validators.required);

                                    checkboxoptionArray.push(optioncontrol);
                                }
                                Formfields.addControl(findex.toString(), checkboxoptionArray);
                            }
                            else {
                                var newcontrol = new FormControl(null, Validators.required);
                                Formfields.addControl(findex.toString(), newcontrol);
                            }
                        }
                        Formcurrsection.push(Formfields);
                    }
                    FormAllSections.push(Formcurrsection);
                    console.log(FormAllSections);
                }
            }
        });
    }

    AddSection(currsectionindex) {
        let currsection = this.Sections[currsectionindex];
        var fields = currsection.Fields;

        const FormAllSections = this.ProfileForm.get('customcontrols') as FormArray;
        //console.log(FormAllSections);
        const Formcurrsection = FormAllSections.controls[currsectionindex] as FormArray;

        var Formfields = new FormGroup({});
        for (var findex = 0; findex < fields.length; findex++) {

            if (fields[findex].FieldType == 'Checkbox') {
                const checkboxoptionArray = new FormArray([]);

                for (var count = 0; count < fields[findex].options.length; count++) {
                    var option = fields[findex].options[count];
                    var optioncontrol;
                    optioncontrol = new FormControl(false, Validators.required);

                    checkboxoptionArray.push(optioncontrol);
                }
                Formfields.addControl(findex.toString(), checkboxoptionArray);
            }
            else {
                var newcontrol = new FormControl(null, Validators.required);
                Formfields.addControl(findex.toString(), newcontrol);
            }
        }

        Formcurrsection.push(Formfields);
        this.Sections[currsectionindex].count++;
    }

    RemoveSection(currsectionindex, subindex) {
        let currsection = this.Sections[currsectionindex];
        var fields = currsection.Fields;

        const FormAllSections = this.ProfileForm.get('customcontrols') as FormArray;
        //console.log(FormAllSections);
        const Formcurrsection = FormAllSections.controls[currsectionindex] as FormArray;
        Formcurrsection.removeAt(subindex);

        this.Sections[currsectionindex].count--;
    }
}
