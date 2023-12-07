import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IBreadcrumb } from "./ibreadcrumb";
import {BreadcrumbService} from "./services/breadcrumb.service";

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  styleUrls: ["./breadcrumb.component.scss"]
})
export class BreadcrumbComponent implements OnInit, OnDestroy {

  crumbs!: IBreadcrumb[];

  protected subscription?: Subscription;

  constructor(protected service: BreadcrumbService) {

  }

  public ngOnInit(): void {
    this.subscription = this.service.crumbs$.subscribe((crumbs: IBreadcrumb[]) => {
      this.crumbs = crumbs;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
