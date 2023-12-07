import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpecialistService } from 'src/app/shared';
import { Specialist } from 'src/app/shared/type';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {
  
  Items: Specialist[] | undefined;
  canSearchMore: boolean = true;

  constructor(private activatedRoute: ActivatedRoute, private specialistDataService: SpecialistService) {
    this.Items = this.specialistDataService.filterSpecialist(10);
  }

  ngOnInit(): void {
  }

  fetchMore(){
    let fetchItems = this.specialistDataService.filterSpecialist(10);
    this.Items?.push(...fetchItems);
  }
  
}
