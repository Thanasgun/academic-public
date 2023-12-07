import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceUnitComponent } from './service-unit.component';
import { ServiceUnitRoutingModule } from './service-unit-routing.module';
import { ViewComponent } from './view/view.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ServiceUnitModalComponent } from '../components/service-unit-modal/service-unit-modal.component';
import { TableListComponent } from './table-list/table-list.component';
import { FilterComponent } from './filter/filter.component';
import { PublicSharedModule } from '../components/public-shared.module';



@NgModule({
  declarations: [
    ServiceUnitComponent,
    ViewComponent,
    TableListComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PublicSharedModule,
    ServiceUnitRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA 
  ]
})
export class ServiceUnitModule { }
