import { SectionModel } from './Section.model';

export class FormModel {
    _id: string;
    FormType: string;
    FormTypeName: string;
    FormTitle: string;
    Sections: SectionModel[];
}
