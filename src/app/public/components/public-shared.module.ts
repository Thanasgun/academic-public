import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature/feature.component';
import { FeaturedOfficerComponent } from './featured-officer/featured-officer.component';
import { FeaturedServiceUnitComponent } from './featured-service-unit/featured-service-unit.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PortalActivitiesComponent } from './portal-activities/portal-activities.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ServiceUnitModalComponent } from './service-unit-modal/service-unit-modal.component';
import { SpecialistModalComponent } from './specialist-modal/specialist-modal.component';
import { TranslateModule } from '@ngx-translate/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    FeatureComponent,
    FeaturedOfficerComponent,
    FeaturedServiceUnitComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    PortalActivitiesComponent,
    ServiceUnitModalComponent,
    SpecialistModalComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    RouterModule,
    AccordionModule,
    AlertModule,
    ButtonsModule,
    CarouselModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports:[
    FeatureComponent,
    FeaturedOfficerComponent,
    FeaturedServiceUnitComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    PortalActivitiesComponent,
    ServiceUnitModalComponent,
    SpecialistModalComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PublicSharedModule { }
