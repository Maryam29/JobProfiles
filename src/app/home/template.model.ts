import { SectionModel } from "./Section.model";

export class TemplateModel{
    _id:string;
    TemplateType:string;
    TemplateTitle:string;
    Sections: SectionModel[];
}