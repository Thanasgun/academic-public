import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpecialistService } from 'src/app/shared';
import { Specialist } from 'src/app/shared/type';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent  implements OnInit {
  
  Items: Specialist[] | undefined;
  isAdvanceSearch: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private specialistDataService: SpecialistService) {
    this.Items = this.specialistDataService.filterSpecialist(10);
  }

  ngOnInit(): void {
  }

  toggleAdvanceSearch(){
    this.isAdvanceSearch = !this.isAdvanceSearch;
  }

}
