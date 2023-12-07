import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceUnitService } from 'src/app/shared';
import { ServiceUnit } from 'src/app/shared/type';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent  implements OnInit {
  
  Items: ServiceUnit[] | undefined;
  isAdvanceSearch: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private ServiceUnitService: ServiceUnitService) {
    this.Items = this.ServiceUnitService.filterServiceUnit(10);
  }

  ngOnInit(): void {
  }

  toggleAdvanceSearch(){
    this.isAdvanceSearch = !this.isAdvanceSearch;
  }

}
