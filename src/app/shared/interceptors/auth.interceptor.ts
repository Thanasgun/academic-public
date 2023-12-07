import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpErrorResponse
} from "@angular/common/http";

import { AuthService, TokenService } from "../services";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, filter, switchMap, take } from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private tokenService: TokenService, private authService: AuthService) { }
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authReq: any = req;
    const token: any = this.tokenService.token;
    if (token != null) {
      authReq = this.addTokenHeader(req, token);
    }

    return next.handle(authReq).pipe(catchError((error: any) => {
      if (error instanceof HttpErrorResponse && !authReq.url.includes("signin") && error.status === 401) {
        return this.handle401Error(authReq, next);
      }
      return throwError(error);
    }));
  }

  private handle401Error(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
      const token: any = this.tokenService.refreshToken;
      if (token) {
        return this.authService.refreshToken(token).pipe(
          switchMap((response: any) => {
            this.isRefreshing = false;
            this.tokenService.token = response.token;
            this.tokenService.refreshToken = response.refreshToken;
            this.tokenService.userProfile = response.userData;
            this.refreshTokenSubject.next(response.token);

            return next.handle(this.addTokenHeader(request, response.token));
          }),
          catchError((err) => {
            this.isRefreshing = false;

            this.tokenService.signOut();
            return throwError(err);
          })
        );
      }
    }
    return this.refreshTokenSubject.pipe(
      filter(token => token !== null),
      take(1),
      switchMap((token) => next.handle(this.addTokenHeader(request, token)))
    );
  }

  private addTokenHeader(request: HttpRequest<unknown>, token: string): any {
    request = request.clone({ headers: request.headers.set("Access-Control-Allow-Origin", "*") });
    request = request.clone({ headers: request.headers.set("Authorization", "Bearer " + token) });
    return request;
  }
}
