import { Component, OnInit } from "@angular/core";
import { ApiService, AuthService, TokenService } from "src/app/shared";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  model: any = {};
  isLoading = false;

  constructor(private router: Router, private apiService: ApiService, private tokenService: TokenService, private authService: AuthService) { }

  ngOnInit(): void {

  }

  login(): void {
    this.isLoading = true;
    this.apiService.post("signin", this.model).subscribe((response: any) => {
      this.isLoading = false;

      if (!response.status) {
        return;
      }

      this.tokenService.token = response.token;
      this.tokenService.refreshToken = response.refreshToken;

      this.router.navigate(["/"]);

    }, (err: any) => {
      console.log(err);
      this.isLoading = false;
      Swal.fire('Unauthorized!', 'Your account was unauthorized.', 'warning');
    });
  }

  loginMu(): void {
    window.location.href = this.authService.adfsAuthUrl() + '?appkey=' + this.authService.appKey();
  }
}
