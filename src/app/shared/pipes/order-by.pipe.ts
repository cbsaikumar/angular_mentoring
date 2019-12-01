import { ICourse } from './../../models/iCourse';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: Array<ICourse>, field: string): Array<ICourse> {
    if(!Array.isArray(array)){
      return
    };
    return array.sort((a: ICourse, b: ICourse) => {
      if(a[field] < b[field])
        return -1;
      else 
        return 1;
    });
  }
}
