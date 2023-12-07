import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LobbyComponent } from "./lobby.component";
import { UserRolesComponent } from "./user-roles/user-roles.component";

const routes: Routes = [
  {
    path: "", component: LobbyComponent,
    children: [
      { path: "", redirectTo: "roles", pathMatch: "prefix" },
      {
        path: "roles",
        component: UserRolesComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LobbyRoutingModule { }
