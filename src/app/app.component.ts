import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, HostListener, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { AuthService, TokenService } from "./shared";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {

  @HostListener("window:message", ["$event"])
  onMessage(e: any) {
    if (this.authService.isADFSAuth(e.origin)) {
      if (e.data) {
        this.tokenService.token = e.data.token;
        this.tokenService.refreshToken = e.data.refreshToken;
        this.tokenService.isRemember = true;
        this.tokenService.tokenType = "mu";
        return true;
      }

      return false;
    }

    return false;
  }

  constructor(private tokenService: TokenService, private authService: AuthService) {
  }

  ngOnInit(): void {
    
  }
}
