import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { TokenService } from "../services";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private tokenService: TokenService) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.tokenService.token) {
      return true;
    }

    this.router.navigate(["/login"]);
    return false;
  }
}
