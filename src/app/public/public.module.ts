import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { PublicRoutingModule } from "./public-routing.module";
import { TranslateModule } from "@ngx-translate/core";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { NgChartsModule } from "ng2-charts";
import { ChartModule } from "primeng/chart";
import { PublicComponent } from "./public.component";
import { HeaderComponent } from './components/header/header.component';
import { FeatureComponent } from './components/feature/feature.component';
import { PortalComponent } from './portal/portal.component';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { FeaturedOfficerComponent } from './components/featured-officer/featured-officer.component';
import { FeaturedServiceUnitComponent } from './components/featured-service-unit/featured-service-unit.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortalActivitiesComponent } from './components/portal-activities/portal-activities.component';
import { SpecialistModalComponent } from './components/specialist-modal/specialist-modal.component';
import { ServiceUnitModalComponent } from "./components/service-unit-modal/service-unit-modal.component";
import { PublicSharedModule } from "./components/public-shared.module";


@NgModule({
  declarations: [
    PublicComponent,
    PortalComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    TranslateModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    PublicSharedModule,
    SharedModule,
    NgChartsModule,
    ChartModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA 
  ]
})
export class PublicModule { }
