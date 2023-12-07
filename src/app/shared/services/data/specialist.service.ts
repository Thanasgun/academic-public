import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Specialist } from '../../type';
import MockUtils from './MockUtils';

@Injectable({
  providedIn: 'root'
})
export class SpecialistService {

  constructor(private apiService: ApiService) { }

  getById(id: string): Specialist {

    const mockData: Specialist[] = [];
    return  {
      id: id,
      img: `assets/images/picture-placeholder.jpg`,
      name: MockUtils.generateRandomName(),
      detail: MockUtils.generateLoremIpsumSentences(MockUtils.Random(2, 6)),
      position: MockUtils.generateRandomPosition()
    };

  }

  filterSpecialist(limit:number,filter?:any): Specialist[] {
    const mockData: Specialist[] = [];

    for (let i = 0; i < limit; i++) {
      const newItem: Specialist = {
        id: i.toString(),
        img: `assets/images/picture-placeholder.jpg`,
        name: MockUtils.generateRandomName(),
        detail: MockUtils.generateLoremIpsumSentences(MockUtils.Random(1, 3)),
        position: `Position ${i + 1}`
      };
      mockData.push(newItem);
    }

    return mockData;
  }

}
