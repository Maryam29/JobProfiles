import { FormControlModel } from './form-control.model';

export class FieldModel {
    FieldID: string;
    FieldName: string;
    FieldType: string;
    options: string[];
    isFieldChecked: boolean; // Use in Applicant Profile Page
    DependentFieldList: {FieldID, SectionID}[]; // List of Children dependent on this field
    ParentField: {FieldID, SectionID, FieldType, FieldList: any[]}; // Assuming single Parent
    Table: string;  // If Options in the Field is predefined in a Table
}
