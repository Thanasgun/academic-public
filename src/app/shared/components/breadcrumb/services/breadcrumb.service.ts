import { Injectable, Injector, OnDestroy, Type } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, concat, from, isObservable, Observable, of, Subscription } from 'rxjs';

import { BreadcrumbResolver } from '../resolvers/breadcrumb.resolver';
import { concatMap, distinct, filter, first, mergeMap, tap, toArray } from 'rxjs/operators';
import { IBreadcrumb } from '../ibreadcrumb';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService implements OnDestroy {

  postProcess!: (crumbs: IBreadcrumb[]) => Promise<IBreadcrumb[]> | Observable<IBreadcrumb[]> | IBreadcrumb[];

  protected breadcrumbs = new BehaviorSubject<IBreadcrumb[]>([]);
  protected defaultResolver = new BreadcrumbResolver();
  protected subscription?: Subscription;

  get crumbs$(): Observable<IBreadcrumb[]> {
    return this.breadcrumbs.asObservable();
  }

  constructor(protected router: Router, protected injector: Injector) {
    this.subscription = this.router.events.pipe(
      filter(x => x instanceof NavigationEnd),
      concatMap(() => this.onNavigationEnd())
    ).subscribe();

    this.onNavigationEnd().subscribe();
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.breadcrumbs.complete();
  }

  protected onNavigationEnd() {
    return this.resolveCrumbs(this.router.routerState.snapshot.root).pipe(
      mergeMap((breadcrumbs) => breadcrumbs),
      distinct((breadcrumb) => breadcrumb.text),
      toArray(),
      mergeMap((breadcrumbs) => {
        return this.postProcess ? this.wrapIntoObservable(this.postProcess(breadcrumbs)).pipe(first()) : of(breadcrumbs);
      }),
      tap((breadcrumbs) => this.breadcrumbs.next(breadcrumbs))
    );
  }

  protected resolveCrumbs(route: ActivatedRouteSnapshot): Observable<IBreadcrumb[]> {
    let crumbs$: Observable<IBreadcrumb[]> = of([]);
    const data = route.routeConfig?.data;

    if (data?.['breadcrumbs']) {
      const resolver = this.getBreadcrumbResolver(data['breadcrumbs']);
      const result = resolver.resolve(route, this.router.routerState.snapshot);
      crumbs$ = this.wrapIntoObservable(result).pipe(first());
    }

    return route.firstChild ? concat(crumbs$, this.resolveCrumbs(route.firstChild)) : crumbs$;
  }

  protected getBreadcrumbResolver(breadcrumbs: string | Type<BreadcrumbResolver>): BreadcrumbResolver {
    return typeof breadcrumbs === 'function' && breadcrumbs.prototype instanceof BreadcrumbResolver
      ? this.injector.get<BreadcrumbResolver>(breadcrumbs)
      : this.defaultResolver;
  }

  protected wrapIntoObservable<T>(value: T | Promise<T> | Observable<T>): Observable<T> {
    return isObservable(value) ? value : from(Promise.resolve(value));
  }
}
