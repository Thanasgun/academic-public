import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class AuthService {

  constructor(private http: HttpClient) { }
  // login, register
  refreshToken(token: string): any {
    return this.http.post(environment.endpoint.api + "refreshtoken", {
      refreshToken: token
    }, httpOptions);
  }

  getUserProfile(): any {
    return this.http.get(environment.endpoint.api + "user-profile", httpOptions);
  }

  isADFSAuth(origin: string): boolean {
    let validUrl: any = environment.endpoint.adfsValidUrl.split(",");

    for (let index in validUrl) {
      if (validUrl[index].includes(origin)) {
        return true;
      }
    }
    return false;
    // return environment.endpoint.adfsUrl.includes(origin);
  }

  appKey():string {
    return environment.auth.sysKey;
  }

  adfsAuthUrl(): string {
    return environment.endpoint.adfsUrl;
  }
}
