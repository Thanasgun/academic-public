import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthInjectComponent } from "./auth-inject/auth-inject.component";
import { LogoutComponent } from "./logout/logout.component";

import { AuthGuard } from "./shared";

const routes: Routes = [
  { path: "", loadChildren: () => import("./public/public.module").then((m) => m.PublicModule)  },
  { path: "auth", component: AuthInjectComponent },
  { path: "logout", component: LogoutComponent },
  { path: "login", loadChildren: () => import("./login/login.module").then((m) => m.LoginModule) },
  { path: "lobby", loadChildren: () => import("./lobby/lobby.module").then((m) => m.LobbyModule), canActivate: [AuthGuard] },
  { path: "signup", loadChildren: () => import("./signup/signup.module").then((m) => m.SignupModule), }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
