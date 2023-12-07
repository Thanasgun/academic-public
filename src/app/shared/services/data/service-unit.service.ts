import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { ServiceUnit } from '../../type';
import MockUtils from './MockUtils';

@Injectable({
  providedIn: 'root'
})
export class ServiceUnitService {

  constructor(private apiService: ApiService) { }

  getById(id: string): ServiceUnit {

    const mockData: ServiceUnit[] = [];
    return  {
      id: id,
      img: `assets/images/picture-placeholder.jpg`,
      name: MockUtils.generateRandomServiceUnitName(),
      detail: MockUtils.generateLoremIpsumSentences(MockUtils.Random(2, 6)),
    };

  }

  filterServiceUnit(limit:number,filter?:any): ServiceUnit[] {
    const mockData: ServiceUnit[] = [];

    for (let i = 0; i < limit; i++) {
      const newItem: ServiceUnit = {
        id: i.toString(),
        img: `assets/images/picture-placeholder.jpg`,
        name: MockUtils.generateRandomServiceUnitName(),
        detail: MockUtils.generateLoremIpsumSentences(MockUtils.Random(1, 3)),
      };
      mockData.push(newItem);
    }

    return mockData;
  }

}
