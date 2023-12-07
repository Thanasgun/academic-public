import { Component } from '@angular/core';
import { FeatureDataService } from 'src/app/shared';
import { Specialist } from 'src/app/shared/type';

@Component({
  selector: 'app-featured-officer',
  templateUrl: './featured-officer.component.html',
  styleUrls: ['./featured-officer.component.scss']
})
export class FeaturedOfficerComponent {
  
  Items: Specialist[];

  constructor(private featureDataService: FeatureDataService) { 
    this.Items = this.featureDataService.GetFeaturedSpecialist();
  }

  ngOnInit(): void {
  }

}
