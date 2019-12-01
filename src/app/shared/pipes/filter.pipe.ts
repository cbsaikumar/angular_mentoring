import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from 'src/app/models/iCourse';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: Array<ICourse>, field: string, fieldVal: string): Array<ICourse> {
    if(!Array.isArray(array)){
      return;
    }
    return array.filter((el)=>el[field].toUpperCase().includes(fieldVal.toUpperCase()));
  }

}
