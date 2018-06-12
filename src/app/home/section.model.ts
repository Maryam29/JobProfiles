import { FieldModel } from './field.model';

export class SectionModel {
    SectionID:string;
    SectionName:string;
    CanBeMultiple:boolean;
    Fields: FieldModel[];
}