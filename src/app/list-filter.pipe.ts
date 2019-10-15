import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listFilter'
})
export class ListFilterPipe implements PipeTransform {

  transform(list: any[], search: string): any {
    return list ? list.filter(item => item.name.search(new RegExp(search, 'i')) > -1) : [];
  }

}
