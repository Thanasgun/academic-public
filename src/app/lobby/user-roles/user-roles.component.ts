import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService, AuthService, TokenService } from "src/app/shared";

@Component({
  selector: "app-user-roles",
  templateUrl: "./user-roles.component.html",
  styleUrls: ["./user-roles.component.scss"]
})
export class UserRolesComponent implements OnInit {

  isLoading = false;
  roles: any = [];

  constructor(
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles(): void {
    this.apiService.get("lobby").subscribe((response: any) => {
      if (!response || !response.status) {
        this.router.navigate(["/login"]);
        return;
      }

      this.roles = response.roles;
      if (this.roles.length === 1) {
        this.selectRole(this.roles[0]);
      }
    }, (err: any) => {
      console.log(err);
      this.router.navigate(["/login"]);
    });
  }

  selectRole(role: string): void {
    this.apiService.get("lobby/select-role/" + role).subscribe((response: any) => {
      if (!response.status) {
        return;
      }

      this.tokenService.token = response.token;
      this.tokenService.refreshToken = response.refreshToken;
      this.authService.getUserProfile().subscribe((res: any) => {
        this.tokenService.userProfile = res;
        if (!this.tokenService.userProfile.group) {
          this.router.navigate(["/login"]);
        }

        switch (this.tokenService.userProfile.group) {
          case "MU":
            this.router.navigate(["/admin"]);
            break;

          case "faculty":
            this.router.navigate(["/faculty"]);
            break;

          case "serviceUnit":
            this.router.navigate(["/service-unit"]);
            break;

          default:
            this.router.navigate(["/login"]);
            break;
        }
      }, (err: any) => {
        console.log(err);
        this.router.navigate(["/login"]);
      });

    }, (err: any) => {
      console.log(err);
      this.router.navigate(["/login"]);
    });
  }

}
