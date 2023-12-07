import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, HostListener, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-auth-inject",
  templateUrl: "./auth-inject.component.html",
  styleUrls: ["./auth-inject.component.scss"]
})
export class AuthInjectComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(async params => {
      let activateCode = params['a'];

      if (activateCode) {
        // let endpoint = environment.service.endpoint;
        // this.http.get(endpoint.api + "MailActivate/" + activateCode).subscribe((response: any) => {
        //   if (response.status) {

        //   }
        // }, err => {

        // });
      }
      else {
        this.router.navigate(["/lobby"]);
      }
    });
  }
}
