import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { NavTopComponent } from "./nav-top/nav-top.component";


@NgModule({
  declarations: [
    LoginComponent,
    NavTopComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
