import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'createdAt'
})
export class CreatedAtPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const today = moment();
    const d = moment(value);
    const isSame = today.isSame(d, 'day');
    if (isSame) {
      return d.format('h:mm a');
    } else {
      const yesterday = today.subtract(1, 'day').isSame(d, 'day');
      if (yesterday) {
        return 'Yesterday';
      } else {
        return d.format('MMM D');
      }
    }
    return null;
  }

}
