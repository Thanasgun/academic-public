import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class TokenService {

  constructor() { }

  signOut(): void {
    window.localStorage.removeItem(environment.auth.tokenName);
    window.localStorage.removeItem(environment.auth.refreshTokenName);
    window.sessionStorage.removeItem(environment.auth.userData);
    // window.sessionStorage.clear();
  }

  get token(): string | null {
    return window.localStorage.getItem(environment.auth.tokenName);
  }

  set token(value: any) {
    window.localStorage.removeItem(environment.auth.tokenName);
    window.localStorage.setItem(environment.auth.tokenName, value);
    // window.sessionStorage.removeItem(environment.auth.tokenName);
    // window.sessionStorage.setItem(environment.auth.tokenName, token);
  }

  get tokenType(): string | null {
    return window.localStorage.getItem(environment.auth.tokenType);
  }

  set tokenType(value: any) {
    window.localStorage.removeItem(environment.auth.tokenType);
    window.localStorage.setItem(environment.auth.tokenType, value);
    // window.sessionStorage.removeItem(environment.auth.tokenType);
    // window.sessionStorage.setItem(environment.auth.tokenType, value);
  }

  get isRemember(): string | null {
    return window.localStorage.getItem(environment.auth.isRemember);
  }

  set isRemember(value: any) {
    window.localStorage.removeItem(environment.auth.isRemember);
    window.localStorage.setItem(environment.auth.isRemember, value);
    // window.sessionStorage.removeItem(environment.auth.isRemember);
    // window.sessionStorage.setItem(environment.auth.isRemember, value);
  }

  get refreshToken(): string | null {
    return window.localStorage.getItem(environment.auth.refreshTokenName);
  }

  set refreshToken(value: any) {
    window.localStorage.removeItem(environment.auth.refreshTokenName);
    window.localStorage.setItem(environment.auth.refreshTokenName, value);
    // window.sessionStorage.removeItem(environment.auth.isRemember);
    // window.sessionStorage.setItem(environment.auth.isRemember, value);
  }

  get userProfile(): any {
    const user: any = window.sessionStorage.getItem(environment.auth.userData);
    if (user && user !== "undefined") {
      return JSON.parse(user);
    }
    return {};
  }

  set userProfile(value: any) {
    window.sessionStorage.removeItem(environment.auth.userData);
    window.sessionStorage.setItem(environment.auth.userData, JSON.stringify(value));
  }
}
