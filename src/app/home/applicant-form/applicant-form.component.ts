import { Component, OnInit } from '@angular/core';
import { CustomFormService } from '../custom-form.service';
import { CustomListService } from '../custom-list.service';
import { AuthService } from '../../auth/auth.service';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';
import { concat } from 'rxjs/operator/concat';
import { SectionModel } from '../Section.model';
import { FormModel } from '../form.model';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';

// const URL = 'http://akdesign.in/dev/apiurl/filereciever.php';
const URL = 'http://localhost:3000/file';

@Component({
    selector: 'app-applicant-form',
    templateUrl: './applicant-form.component.html',
    styleUrls: ['./applicant-form.component.css']
})

export class ApplicantFormComponent implements OnInit {
    uploader: FileUploader = new FileUploader({
    url: URL,
    isHTML5: true
  });
    public hasBaseDropZoneOver = false;
    public hasAnotherDropZoneOver = false;
    type: string;
    isApplicationFilled: boolean;
    fieldcount: number;
    FormFields = new Array();
    // Actual Form with Subsections also included.
    // This Form is added as same section's different subsection can have different field options.
    // True for cases like Country->State. With different country selected diff. states list in 2 sub-sections but same section
    FormLayout;
    ProfileForm: FormGroup; // Angular Reactive Form.
    FormTitle: string;
    sessionData;
    ProfileDetails;   // This has filled Applicant Data fetched from DB.
    ActualForm: FormModel; // Actual Form created by Admin for specific Aplicant Type.
    isSelected: any[];
    isFormSaved = 0;
    isFormLoaded = false;  // It checks whether in the begining Empty or Filled Form is loaded
    // When Form is partially filled.0: form in no-edit state, 1: Changes Saved, -1: Changes not saved due to error,2:in edit/remove/add
    constructor(private customFormService: CustomFormService, private authService: AuthService,
        private fb: FormBuilder, private customListService: CustomListService) { }

    ngOnInit() {
        // console.log(this.authService.sessionData);
        this.sessionData = this.authService.sessionData;
        this.type = this.sessionData.type;
        this.ProfileForm = this.fb.group({
            customcontrols: new FormArray([])
        });
        this.GetApplicantProfile();
        this.GetAllList();
    }
    public fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }
     
    public fileOverAnother(e:any):void {
       this.hasAnotherDropZoneOver = e;
    }

    GetApplicantProfile() {
        this.customFormService.GetApplicantProfile(this.sessionData._id).subscribe((obj) => {
            if (obj) {
                this.isApplicationFilled = true;
                this.ProfileDetails = obj;
                this.CreateForm();
            }else {
                this.isApplicationFilled = false;
                console.log(this.type);
                this.CreateEmptyForm();
            }
        });
    }

    GetAllList() {
        if (this.customListService.countries.length === 0) {
            this.customFormService.getCountries().subscribe(obj => {
                this.customListService.countries = obj;
            });
        }
        if (this.customListService.companytypes.length === 0) {
            this.customFormService.getCompanyTypes().subscribe(obj => {
                this.customListService.companytypes = obj;
            });
        }
    }

    GetFieldValue(SectionIndex, subindex, FieldIndex) {
        const FieldType = this.FormLayout.Sections[SectionIndex][subindex].Fields[FieldIndex].FieldType.toString();
        const FormAllSections = this.ProfileForm.get('customcontrols') as FormArray;
        const FormValues = FormAllSections.value;
        let result = '';
        if (FieldType === 'Checkbox') {
            const checkboxarray = FormValues[SectionIndex][subindex][FieldIndex];
            for (let i = 0; i < checkboxarray.length; i++) {
                if (checkboxarray[i]) {
                    result = result + this.FormLayout.Sections[SectionIndex][subindex].Fields[FieldIndex].options[i] + ' ';
                }
            }
            return result;
        }else {
            return FormValues[SectionIndex][subindex][FieldIndex];
        }
    }

    // ----------------For Checkbox---------------//
    checkOptionInProfile(sectionid, subsectionindex, option, fieldid) {
        if (this.ProfileDetails[sectionid][subsectionindex][fieldid] &&
            this.ProfileDetails[sectionid][subsectionindex][fieldid].length > 0) {
            return this.ProfileDetails[sectionid][subsectionindex][fieldid].includes(option);
        }else {
            return false;
        }
    }

    onSelectParent(sectionindex, subindex, fieldindex, value) {

        const currFieldId = this.FormLayout.Sections[sectionindex][subindex].Fields[fieldindex].FieldID.toString();
        const FieldType = this.FormLayout.Sections[sectionindex][subindex].Fields[fieldindex].FieldType.toString();
        const currSectionId = this.FormLayout.Sections[sectionindex][subindex].SectionID.toString();
        const ParentSectionId = this.FormLayout.Sections[sectionindex][subindex].Fields[fieldindex].ParentField.SectionID;
        const ParentFieldId = this.FormLayout.Sections[sectionindex][subindex].Fields[fieldindex].ParentField.FieldID;
        let suboptions;
        let ParentValue;


        const FormAllSections = this.ProfileForm.get('customcontrols') as FormArray;
        const FormValues = FormAllSections.value;
        // console.log(FormValues);

        const ParentSectionIndex = this.ActualForm.Sections
                                                    .findIndex(sec => sec.SectionID.toString() === ParentSectionId);

        if (ParentSectionIndex !== -1) {
            const ParentSection = this.FormLayout.Sections[ParentSectionIndex][subindex];
            const ParentFieldIndex = ParentSection.Fields.findIndex(field => field.FieldID.toString() === ParentFieldId);
            const ParentField = ParentSection.Fields[ParentFieldIndex];
              if (ParentField) {
                  // Taking Parent value from same sub-section
                ParentValue = FormValues[ParentSectionIndex][subindex][ParentFieldIndex];
              }
        }
        // get sub-options for selected Parent ( for eg: list of states if country selected is India)

        if (FieldType === 'Country') {
            if (this.customListService.countries.length > 0) {
                const country = this.customListService.countries.find(c => c.CountryName === value);
                suboptions = country.States;
            }
        }
        if (FieldType === 'State') {
            if (this.customListService.countries.length > 0) {
                const type = this.customListService.countries.find(c =>
                    c.CountryName === ParentValue
                );
                const States = type.States.find(c => c.StateName === value);
                if (States) {
                    suboptions = States.Cities;
                }
            }
        }

        if (FieldType === 'Type') {
            if (this.customListService.companytypes.length > 0) {
                const type = this.customListService.companytypes.find(c => c.name === value);
                suboptions = type.InstallationType;
            }
        }
        if (FieldType === 'InstallationType') {
            if (this.customListService.companytypes.length > 0) {
                const type = this.customListService.companytypes.find(c =>
                    c.name === ParentValue
                );
                const InstallationType = type.InstallationType.find(c => c.name === value);
                if (InstallationType) {
                    suboptions = InstallationType.Designation;
                }
            }
        }

       // Get dependent fields
       const DepedentFields = this.FormLayout.Sections[sectionindex][subindex].Fields[fieldindex].DependentFieldList;
       for (let i = 0; i < DepedentFields.length; i++) {

        const DependentSectionId = DepedentFields[i].SectionID.toString();
        const DependentFieldId = DepedentFields[i].FieldID.toString();

        // Search for dependent SectionId and FieldId in all Sections. when found remove currfield from its parent field List
        const DependentSectionIndex = this.ActualForm.Sections
                                                .findIndex(sec => sec.SectionID.toString() === DependentSectionId);

        if (DependentSectionIndex !== -1) {
            const DependentSection = this.FormLayout.Sections[DependentSectionIndex][subindex];
          const DependentField = DependentSection.Fields.find(field => field.FieldID.toString() === DependentFieldId);
          if (DependentField) {
            // Update Field.options
            DependentField.options = suboptions;
          }
        }
        }
    }

    GetAllCountries(sectionindex, subsectionindex, fieldindex, Formfields: FormGroup) {
        // ------------------- If countries is never fetched------------//
        if (this.customListService.countries.length === 0) {
            this.customFormService.getCountries().subscribe(obj => {
                this.customListService.countries = obj;
                const field =  this.FormLayout.Sections[sectionindex][subsectionindex].Fields[fieldindex];
                field.options = this.customListService.countries;
                this.PushOptions(sectionindex, subsectionindex, fieldindex, Formfields, field);
            });
        }else {
            const field =  this.FormLayout.Sections[sectionindex][subsectionindex].Fields[fieldindex];
            field.options = this.customListService.countries;
            this.PushOptions(sectionindex, subsectionindex, fieldindex, Formfields, field);
        }
    }

    GetAllCompanyType(sectionindex, subsectionindex, fieldindex, Formfields: FormGroup) {
        // ------------------- If company Types is never fetched------------//
        if (this.customListService.companytypes.length === 0) {
            this.customFormService.getCompanyTypes().subscribe(obj => {
                this.customListService.companytypes = obj;
                const field =  this.FormLayout.Sections[sectionindex][subsectionindex].Fields[fieldindex];
                field.options = this.customListService.companytypes;
                this.PushOptions(sectionindex, subsectionindex, fieldindex, Formfields, field);
            });
        }else {
            const field =  this.FormLayout.Sections[sectionindex][subsectionindex].Fields[fieldindex];
            field.options = this.customListService.companytypes;
            this.PushOptions(sectionindex, subsectionindex, fieldindex, Formfields, field);
        }
    }

    PushOptions(sectionindex, subsectionindex, fieldindex, Formfields: FormGroup, field) {
        let newcontrol;

        // If Partially-Filled/ fully Filled form is already present in DB
        if (this.ProfileDetails != null) {
            const existingdetails = this.ProfileDetails[this.FormLayout.Sections[sectionindex][subsectionindex].SectionID];
            // console.log(fields.options);
            let isSectionDetailAvailable = false;
            if (existingdetails && existingdetails.length > 0) {
                isSectionDetailAvailable = true;
            }
            if (isSectionDetailAvailable) { // ------If the Corresponding section is available in Applicant Form -----//
                const val = existingdetails[subsectionindex][field.FieldID];
                if (val) { // ------If the Corresponding field is available in Applicant Form -----//
                    newcontrol = new FormControl(val, Validators.required);
                }else {
                    newcontrol = new FormControl(null, Validators.required);
                }
            }else {
                newcontrol = new FormControl(null, Validators.required);
            }
        }else {
            newcontrol = new FormControl(null, Validators.required);
        }

        // const FormAllSections = this.ProfileForm.get('customcontrols') as FormArray;
        // const Formfields = new FormGroup({});
        Formfields.addControl(fieldindex.toString(), newcontrol); // Adds new Control to Form Fields
        // Formcurrsection.insert(subsectionindex, Formfields);  // Adds Form Fields to FormcurrSection
        // FormAllSections.insert(sectionindex, Formcurrsection); // Adds FormCurrSection to FormAllSection
        // console.log(FormAllSections);
    }

    CreateForm() {
        this.customFormService.GetForm(this.type).subscribe((obj) => {
            this.FormLayout = new Object();
            this.FormLayout.Sections = new Array();

            if (obj) {
                this.ActualForm = obj;
                this.FormTitle = obj.FormTitle;
                const FormAllSections = this.ProfileForm.get('customcontrols') as FormArray;

                for (let i = 0; i < obj.Sections.length; i++) {

                    const currsection = JSON.parse(JSON.stringify(obj.Sections[i])); // To do Deep Copy
                    const existingdetails = this.ProfileDetails[obj.Sections[i].SectionID];
                    let isSectionDetailAvailable = false;

                    if (existingdetails && existingdetails.length > 0) {
                        currsection.count = existingdetails.length;
                        isSectionDetailAvailable = true;
                    }else {
                        currsection.count = 1;
                    }
                    this.FormLayout.Sections[i] = new Array();
                    const fields = currsection.Fields;
                    currsection.isEditMode = false;

                    const Formcurrsection = new FormArray([]);
                    for (let j = 0; j < currsection.count; j++) {

                        const subsection = JSON.parse(JSON.stringify(currsection));
                        this.FormLayout.Sections[i].push(subsection); // To do Deep Copy

                        const Formfields = new FormGroup({});

                        for (let findex = 0; findex < fields.length; findex++) {
                            // Get Countries List if Country type

                            if (fields[findex].FieldType === 'Country') {
                                // FormSectionIndex, FormCurresectionIndex, fieldindex
                                this.GetAllCountries(i, j, findex, Formfields);
                            }else if (fields[findex].FieldType === 'Type') {
                                // FormSectionIndex, FormCurresectionIndex, fieldindex
                                this.GetAllCompanyType(i, j, findex, Formfields);
                            }else if (fields[findex].FieldType === 'Checkbox') {
                                const checkboxoptionArray = new FormArray([]);

                                for (let count = 0; count < fields[findex].options.length; count++) {
                                    const option = fields[findex].options[count];
                                    let optioncontrol;

                                    if (isSectionDetailAvailable) {
                                        if (this.checkOptionInProfile(obj.Sections[i].SectionID, j, option, fields[findex].FieldID)) {
                                            optioncontrol = new FormControl(true, Validators.required);
                                        }else {
                                            optioncontrol = new FormControl(false, Validators.required);
                                        }
                                    }else {
                                        optioncontrol = new FormControl(false, Validators.required);
                                    }
                                    checkboxoptionArray.push(optioncontrol);
                                }
                                Formfields.addControl(findex.toString(), checkboxoptionArray);
                            }else {
                                let newcontrol;
                                if (isSectionDetailAvailable) {
                                    const val = existingdetails[j][fields[findex].FieldID];
                                    if (val) {
                                        newcontrol = new FormControl(val, Validators.required);
                                    }else {
                                        newcontrol = new FormControl(null, Validators.required);
                                    }
                                }else {
                                    newcontrol = new FormControl(null, Validators.required);
                                }
                                Formfields.addControl(findex.toString(), newcontrol);
                            }
                        }
                        // console.log(j);
                        Formcurrsection.push(Formfields);
                    }
                    FormAllSections.push(Formcurrsection);
                }
               // console.log(FormAllSections);
               // console.log(this.FormLayout);
            }
            this.isFormLoaded = true;
        });
    }

    CreateEmptyForm() {
        // console.log(this.type);
        this.customFormService.GetForm(this.type).subscribe((obj) => {
            this.FormLayout = new Object();
            this.FormLayout.Sections = new Array();
            if (obj) {
                this.ActualForm = obj;
                this.FormTitle = obj.FormTitle;
                const FormAllSections = this.ProfileForm.get('customcontrols') as FormArray;

                for (let i = 0; i < obj.Sections.length; i++) {

                    const currsection = JSON.parse(JSON.stringify(obj.Sections[i])); // To do Deep Copy
                    // console.log(JSON.stringify(obj.Sections[i]));

                    currsection.isEditMode = false;
                    currsection.count = 1;
                    // Each Section is an Array of Sub section. Initially in an Empty form Section has only 1 SubSection //
                    this.FormLayout.Sections[i] = new Array();
                    const fields = currsection.Fields;

                    const Formcurrsection = new FormArray([]);
                    for (let j = 0; j < currsection.count; j++) {
                        this.FormLayout.Sections[i].push(currsection);
                        const Formfields = new FormGroup({});

                        for (let findex = 0; findex < fields.length; findex++) {
                            if (fields[findex].FieldType === 'Country') {

                                this.GetAllCountries(i, j, findex, Formfields);
                                const newcontrol = new FormControl(null, Validators.required);
                                Formfields.addControl(findex.toString(), newcontrol);

                            }else if (fields[findex].FieldType === 'Type') {

                                this.GetAllCompanyType(i, j, findex, Formfields);
                                const newcontrol = new FormControl(null, Validators.required);
                                Formfields.addControl(findex.toString(), newcontrol);

                            }else if (fields[findex].FieldType === 'Checkbox') {
                                const checkboxoptionArray = new FormArray([]);

                                for (let count = 0; count < fields[findex].options.length; count++) {
                                    const option = fields[findex].options[count];
                                    let optioncontrol;
                                    optioncontrol = new FormControl(false, Validators.required);

                                    checkboxoptionArray.push(optioncontrol);
                                }
                                Formfields.addControl(findex.toString(), checkboxoptionArray);
                            }else {
                                const newcontrol = new FormControl(null, Validators.required);
                                Formfields.addControl(findex.toString(), newcontrol);
                            }
                        }
                        Formcurrsection.push(Formfields);
                    }
                    FormAllSections.push(Formcurrsection);
                    // console.log(FormAllSections);
                }
            }
            this.isFormLoaded = true;
        });
    }

    AddSubSection(currsectionindex) {
        const currsection = this.FormLayout.Sections[currsectionindex][0];
        const newSubSection = JSON.parse(JSON.stringify(currsection));
        newSubSection.isEditMode = true;
        const fields = currsection.Fields;

        const FormAllSections = this.ProfileForm.get('customcontrols') as FormArray;
        // console.log(FormAllSections);
        const Formcurrsection = FormAllSections.controls[currsectionindex] as FormArray;

        const Formfields = new FormGroup({});
        for (let findex = 0; findex < fields.length; findex++) {

            if (fields[findex].FieldType === 'Checkbox') {
                const checkboxoptionArray = new FormArray([]);

                for (let count = 0; count < fields[findex].options.length; count++) {
                    const option = fields[findex].options[count];
                    let optioncontrol;
                    optioncontrol = new FormControl(false, Validators.required);

                    checkboxoptionArray.push(optioncontrol);
                }
                Formfields.addControl(findex.toString(), checkboxoptionArray);
            }else {
                const newcontrol = new FormControl(null, Validators.required);
                Formfields.addControl(findex.toString(), newcontrol);
            }
        }

        Formcurrsection.push(Formfields);
        this.FormLayout.Sections[currsectionindex].push(newSubSection);
        this.isFormSaved = 2;
    }

    RemoveSubSection(currsectionindex, subindex) {
        // Check if only one subsection/row then don't remove row
        if (this.FormLayout.Sections[currsectionindex].length > 1) {
            const FormAllSections = this.ProfileForm.get('customcontrols') as FormArray;
            // console.log(FormAllSections);
            const Formcurrsection = FormAllSections.controls[currsectionindex] as FormArray;
            Formcurrsection.removeAt(subindex);
            // console.log(this.FormLayout.Sections[currsectionindex][subindex]);
            const subsectionarray = this.FormLayout.Sections[currsectionindex];
            subsectionarray.splice(subindex, 1);
        }
        this.isFormSaved = 2;
    }

    EditSubSection(sectionindex, subindex) {
        this.FormLayout.Sections[sectionindex][subindex].isEditMode = true;
        this.isFormSaved = 2;
    }

    onSavesubSection(sectionindex, subindex) {
        this.FormLayout.Sections[sectionindex][subindex].isEditMode = false;
        this.isFormSaved = 2;
    }

    // onSaveSection(secindex) {

    //     const obj = {};
    //     const oldobj = { _id: this.sessionData._id };

    //     const FormAllSections = this.ProfileForm.get('customcontrols') as FormArray;
    //     const FormValues = FormAllSections.value;
    //     // console.log(FormValues);
    //     const sectionid = this.FormLayout.Sections[secindex][0].SectionID;
    //     obj[this.FormLayout.Sections[secindex][0].SectionID] = [];

    //     for (let subsecindex = 0; subsecindex > this.FormLayout.Sections[secindex].length; subsecindex++) {
    //         const fieldsobj = {};
    //         const Fields = this.FormLayout.Sections[secindex][subsecindex].Fields;
    //         for (let findex = 0; findex < Fields.length; findex++) {
    //             const field = Fields[findex];
    //             const fieldid = field.FieldID;
    //             // console.log(fieldid);
    //             const fieldvalue = FormValues[secindex][subsecindex][findex];
    //             // console.log(fieldvalue);
    //             if (field.FieldType === 'Checkbox') {
    //                 fieldsobj[fieldid] = new Array();
    //                 for (let j = 0; j < field.options.length; j++) {
    //                     if (fieldvalue[j]) {
    //                         fieldsobj[fieldid].push(field.options[j]);
    //                     }
    //                 }
    //             }else {
    //                 fieldsobj[fieldid] = fieldvalue;
    //             }
    //         }
    //         obj[sectionid].push(fieldsobj);
    //         this.FormLayout.Sections[secindex][subsecindex].isEditMode = false;
    //     }

    //     this.customFormService.UpdateApplicantProfile(oldobj, obj).subscribe((res) => {
    //         if (res) {
    //             this.ProfileDetails = res;
    //         }
    //     });
    // }

    onSaveForm() {
        const FormAllSections = this.ProfileForm.get('customcontrols') as FormArray;
        const FormValues = FormAllSections.value;
        // console.log(FormValues);

        const obj = { _id: this.sessionData._id, type: this.sessionData.type };
        const Sections = this.FormLayout.Sections;
        for (let secindex = 0; secindex < this.FormLayout.Sections.length; secindex++) {
            // Assuming atleast 1 sub section in a section
            obj[Sections[secindex][0].SectionID] = [];

            for (let subsecindex = 0; subsecindex < Sections[secindex].length; subsecindex++) {
                const fieldsobj = {};
                const Subsection = Sections[secindex][subsecindex];
                Sections[secindex][subsecindex].isEditMode = false;
                for (let i = 0; i < Subsection.Fields.length; i++) {
                    const field = Subsection.Fields[i];
                    const fieldid = field.FieldID;
                    const fieldvalue = FormValues[secindex][subsecindex][i];
                    // console.log(fieldvalue);

                    if (field.FieldType === 'Checkbox') {
                        fieldsobj[fieldid] = new Array();
                        for (let j = 0; j < field.options.length; j++) {
                            if (fieldvalue[j]) {
                                fieldsobj[fieldid].push(field.options[j]);
                            }
                        }
                    }else {
                        fieldsobj[fieldid] = fieldvalue;
                    }
                }
                obj[Sections[secindex][subsecindex].SectionID].push(fieldsobj);
            }
        }
        // console.log(obj);

        this.customFormService.SaveApplicantForm(obj).subscribe(res => {
            // console.log(res);
            if (res) {
                this.isApplicationFilled = true;
                this.ProfileDetails = res;
                this.isFormSaved = 1;
            }else {
                this.isFormSaved = -1;
            }
        });
    }

}
