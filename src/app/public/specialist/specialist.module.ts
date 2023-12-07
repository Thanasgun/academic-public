import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialistComponent } from './specialist.component';
import { SpecialistRoutingModule } from './specialist-routing.module';
import { ViewComponent } from './view/view.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SpecialistModalComponent } from '../components/specialist-modal/specialist-modal.component';
import { TableListComponent } from './table-list/table-list.component';
import { FilterComponent } from './filter/filter.component';
import { PublicSharedModule } from '../components/public-shared.module';



@NgModule({
  declarations: [
    SpecialistComponent,
    ViewComponent,
    TableListComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PublicSharedModule,
    SpecialistRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA 
  ]
})
export class SpecialistModule { }
