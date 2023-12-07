import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { AccordionModule } from "ngx-bootstrap/accordion";
import { AlertModule, AlertConfig } from "ngx-bootstrap/alert";
import { ButtonsModule } from "ngx-bootstrap/buttons";
import { BsDatepickerModule, BsDatepickerConfig } from "ngx-bootstrap/datepicker";
import { BsDropdownModule, BsDropdownConfig } from "ngx-bootstrap/dropdown";
import { ModalModule, BsModalService } from "ngx-bootstrap/modal";
import { TypeaheadModule } from "ngx-bootstrap/typeahead";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { UploadFileComponent } from "./components/upload-file/upload-file.component";
import { DatePickerComponent } from "./components/date-picker/date-picker.component";
import { FieldErrorDisplayComponent } from "./components/field-error-display/field-error-display.component";
import { FieldCustomErrorDisplayComponent } from "./components/field-custom-error-display/field-custom-error-display.component";
import { AutoCompleteComponent } from "./components/auto-complete/auto-complete.component";
import { FooterComponent } from "./components/footer/footer.component";
import { DaterangePickerComponent } from './components/daterange-picker/daterange-picker.component';
import { FeatureTitleComponent } from './components/feature-title/feature-title.component';


@NgModule({
  declarations: [
    BreadcrumbComponent,
    UploadFileComponent,
    DatePickerComponent,
    FieldErrorDisplayComponent,
    FieldCustomErrorDisplayComponent,
    AutoCompleteComponent,
    FooterComponent,
    DaterangePickerComponent,
    FeatureTitleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AccordionModule,
    AlertModule,
    ButtonsModule,
    CarouselModule,
    CollapseModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule,
    ModalModule,
    TranslateModule.forRoot(),
    TypeaheadModule.forRoot(),
  ],
  providers: [
    AlertConfig,
    BsDatepickerConfig,
    BsDropdownConfig,
    BsModalService
  ],
  exports: [
    BreadcrumbComponent,
    // InputTextComponent,
    AutoCompleteComponent,
    FooterComponent,
    UploadFileComponent,
    DatePickerComponent,
    DaterangePickerComponent,
    FieldErrorDisplayComponent,
    FieldCustomErrorDisplayComponent,
    FeatureTitleComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
