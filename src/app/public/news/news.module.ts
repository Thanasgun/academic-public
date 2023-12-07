import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { FilterComponent } from './filter/filter.component';
import { TableListComponent } from './table-list/table-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PublicSharedModule } from '../components/public-shared.module';
import { NewsRoutingModule } from './news-routing.module';



@NgModule({
  declarations: [
    NewsComponent,
    FilterComponent,
    TableListComponent
  ],
  imports: [
    NewsRoutingModule,
    CommonModule,
    SharedModule,
    PublicSharedModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NewsModule { }
