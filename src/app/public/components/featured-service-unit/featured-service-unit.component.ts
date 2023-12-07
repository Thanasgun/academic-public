import { Component } from '@angular/core';
import { FeatureDataService } from 'src/app/shared';
import { ServiceUnit } from 'src/app/shared/type';

@Component({
  selector: 'app-featured-service-unit',
  templateUrl: './featured-service-unit.component.html',
  styleUrls: ['./featured-service-unit.component.scss']
})
export class FeaturedServiceUnitComponent {

  Items: ServiceUnit[];

  constructor(private featureDataService: FeatureDataService) { 
    this.Items = this.featureDataService.GetFeaturedServiceUnit();
  }

  ngOnInit(): void {
  }

}
