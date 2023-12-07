import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceUnitService } from 'src/app/shared';
import { ServiceUnit } from 'src/app/shared/type';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {
  
  Items: ServiceUnit[] | undefined;
  canSearchMore: boolean = true;

  constructor(private activatedRoute: ActivatedRoute, private ServiceUnitService: ServiceUnitService) {
    this.Items = this.ServiceUnitService.filterServiceUnit(10);
  }

  ngOnInit(): void {
  }

  fetchMore(){
    let fetchItems = this.ServiceUnitService.filterServiceUnit(10);
    this.Items?.push(...fetchItems);
  }
  
}
