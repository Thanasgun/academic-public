import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LobbyRoutingModule } from "./lobby-routing.module";
import { LobbyComponent } from "./lobby.component";
import { UserRolesComponent } from "./user-roles/user-roles.component";



@NgModule({
  declarations: [
    LobbyComponent,
    UserRolesComponent
  ],
  imports: [
    CommonModule,
    LobbyRoutingModule,
  ]
})
export class LobbyModule { }
