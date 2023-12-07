import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeatureDataService, ServiceUnitService } from 'src/app/shared';
import { ServiceUnit } from 'src/app/shared/type';

@Component({
  selector: 'app-service-unit',
  templateUrl: './service-unit.component.html',
  styleUrls: ['./service-unit.component.scss']
})
export class ServiceUnitComponent  implements OnInit {
  

  constructor() {
  }

  ngOnInit(): void {
  }



}
