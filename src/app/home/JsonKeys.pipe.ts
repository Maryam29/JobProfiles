import { PipeTransform, Pipe } from '@angular/core';

@Pipe(
    {name: 'keys'}
)
export class KeysPipe implements PipeTransform {
  transform(JsonObj) : any {
      return Object.keys(JsonObj)[0];
  }
}