import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: any, filter: string): any {
    if (!filter) {
      return items;
    }
    return items.filter(item => (item.HTMLLead.toLowerCase().includes(filter.toLowerCase()) || item.Title.toLowerCase().includes(filter.toLowerCase())));
  }

}
