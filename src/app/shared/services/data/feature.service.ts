import { Injectable } from '@angular/core';
import { Activity, Banner, Specialist, ServiceUnit } from '../../type';
import MockUtils from './MockUtils';

@Injectable({
  providedIn: 'root'
})

export class FeatureDataService {

  constructor() { }

  GetFeatureBanner(): Banner[] {
    const mockData: Banner[] = [];

    for (let i = 0; i < 6; i++) {
      const newItem: Banner = {
        id: i.toString(),
        img: `https://placehold.co/450x10${i.toString()}`,
        description: `Detail for Banner ${(i + 1).toString()}`,
        redirectTo: `redirect to ${(i + 1).toString()}`
      };
      mockData.push(newItem);
    }

    return mockData;
  }

  GetFeatureActivities(): Activity[] {
    const mockData: Activity[] = [];

    for (let i = 0; i < 6; i++) {
      const newItem: Activity = {
        id: i.toString(),
        img: `assets/images/picture-placeholder2.jpg`,
        title: `Activity Title`,
        description: MockUtils.generateLoremIpsumSentences(1),
        date: MockUtils.randomDateTillLastMonth(5).toLocaleString(),
        redirectTo: `redirect to ${(i + 1).toString()}`
      };
      mockData.push(newItem);
    }

    return mockData;
  }

  GetFeaturedSpecialist(): Specialist[] {
    const mockData: Specialist[] = [];

    for (let i = 0; i < 6; i++) {
      const newItem: Specialist = {
        id: i.toString(),
        img: `assets/images/picture-placeholder.jpg`,
        name: MockUtils.generateRandomName(),
        detail: MockUtils.generateLoremIpsumSentences(MockUtils.Random(1, 3)),
        position: MockUtils.generateRandomPosition()
      };
      mockData.push(newItem);
    }

    return mockData;
  }

  GetFeaturedServiceUnit(): ServiceUnit[] {
    const mockData: ServiceUnit[] = [];

    for (let i = 0; i < 6; i++) {
      const newItem: ServiceUnit = {
        id: i.toString(),
        img: `assets/images/picture-placeholder.jpg`,
        name: `Service Unit ${i + 1}`,
        detail: MockUtils.generateLoremIpsumSentences(MockUtils.Random(3, 7)),
      };
      mockData.push(newItem);
    }

    return mockData;
  }
  
}
