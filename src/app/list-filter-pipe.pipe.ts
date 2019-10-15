import { Pipe, PipeTransform } from '@angular/core';
import {House} from './class/House';
import {HouseFilter} from './class/houseFilter';

@Pipe({
  name: 'listFilterPipe',
  pure: false
})
export class ListFilterPipePipe implements PipeTransform {

  transform(houses: House[], houseFilter: HouseFilter): House[] {
    if (!houses) {
      return houses;
    }
    const filterKeys = Object.keys(houseFilter);
    return houses.filter(house => {
      return filterKeys.every(key => {
        if (!houseFilter[key] || (typeof houseFilter[key] === 'string' && !houseFilter[key].length)) {
          return true;
        }
        if (key === 'minPrice') {
          return house.pricePerNight >= houseFilter[key];
        }
        if (key === 'maxPrice') {
          return house.pricePerNight <= houseFilter[key];
        }
        if (typeof houseFilter[key] === 'number') {
          return house[key] === houseFilter[key];
        }
        if (typeof houseFilter[key] === 'string') {
          return house[key].toLowerCase().includes(houseFilter[key].toLowerCase());
        }
      });
    });
  }
}
