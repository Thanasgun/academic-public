import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeatureDataService, SpecialistService } from 'src/app/shared';
import { Specialist } from 'src/app/shared/type';

@Component({
  selector: 'app-specialist',
  templateUrl: './specialist.component.html',
  styleUrls: ['./specialist.component.scss']
})
export class SpecialistComponent  implements OnInit {
  

  constructor() {
  }

  ngOnInit(): void {
  }



}
