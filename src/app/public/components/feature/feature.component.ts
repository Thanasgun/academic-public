import { Component, OnInit } from '@angular/core';
import { FeatureDataService } from 'src/app/shared';
import { Banner } from 'src/app/shared/type';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  Items: Banner[];

  constructor(private featureDataService: FeatureDataService) { 
    this.Items = this.featureDataService.GetFeatureBanner();
  }

  ngOnInit(): void {
  }

}
