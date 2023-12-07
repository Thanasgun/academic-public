import { Injectable, OnDestroy, EventEmitter, Output } from "@angular/core";
import { BehaviorSubject, concat, from, isObservable, Observable, of, Subscription } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SearchService implements OnDestroy {
  protected _config = new BehaviorSubject<any>(null);
  protected _result = new BehaviorSubject<any>(null);
  protected _searchTrigger = new BehaviorSubject<any>(null);

  get config(): Observable<any> {
    return this._config.asObservable();
  }

  get searchTrigger(): Observable<any> {
    return this._searchTrigger.asObservable();
  }

  get result(): Observable<any> {
    return this._result.asObservable();
  }

  set setResult(v: any) {
    this._result.next(v);
  }

  set setConfig(v: any) {
    this._config.next(v);
  }

  search(): void {
    this._searchTrigger.next(null);
  }

  constructor() { }

  ngOnDestroy(): void {
    this._config.complete();
    this._result.complete();
    this._searchTrigger.complete();
  }
}
