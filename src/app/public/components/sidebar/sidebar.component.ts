import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { TokenService } from "src/app/shared";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menu: any;
  isActive!: boolean;
  collapsed!: boolean;
  showMenu!: string;
  pushRightClass!: string;
  userAccount!: any;

  @Output() collapsedEvent = new EventEmitter<boolean>();

  constructor(private translate: TranslateService, public router: Router, private tokenService: TokenService) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
        this.toggleSidebar();
      }
    });
  }

  ngOnInit(): void {
    this.isActive = false;
    this.collapsed = false;
    this.showMenu = "";
    this.pushRightClass = "push-right";
    this.userAccount = this.tokenService.userProfile;
    this.initMenu();
  }

  eventCalled(): void {
    this.isActive = !this.isActive;
  }

  addExpandClass(element: any): void {
    if (element === this.showMenu) {
      this.showMenu = "0";
    } else {
      this.showMenu = element;
    }
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
    this.collapsedEvent.emit(this.collapsed);
  }

  isToggled(): boolean {
    const dom: any = document.querySelector("body");
    return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar(): void {
    const dom: any = document.querySelector("body");
    dom.classList.toggle(this.pushRightClass);
  }

  rltAndLtr(): void {
    const dom: any = document.querySelector("body");
    dom.classList.toggle("rtl");
  }

  changeLang(language: string): void {
    this.translate.use(language);
  }

  onLoggedout(): void {
    localStorage.removeItem("isLoggedin");
  }

  initMenu(): void {

    let masterData: any = {
      name: "Master Data",
      cssIcon: "fa fa-cogs",
      child: []
    };

 
    let training: any = {
      name: "Training",
      routerLink: "/admin/training",
      cssIcon: "fa fa-book"
    };

    let serviceUnit: any = {
      name: "Service Unit",
      routerLink: "service-unit",
      cssIcon: "fa fa-users"
    };

    let specialist: any = {
      name: "Specialist",
      routerLink: "specialist",
      cssIcon: "fa fa-user"
    };

    let news: any = {
      name: "News",
      routerLink: "news",
      cssIcon: "fa fa-newspaper-o"
    };

    let userPermission: any = {
      name: "User Permission",
      cssIcon: "fa fa-cogs",
      child: [
        {
          name: "Active User",
          routerLink: "/admin/user-permission/active-user",
          cssIcon: "fa fa-file-text-o",
        },
        {
          name: "Pending User",
          routerLink: "/admin/user-permission/pending-user",
          cssIcon: "fa fa-map-o",
        }
      ]
    };

    let home: any = {
      name: "Home",
      routerLink: "/home",
      cssIcon: "fa fa-home",
    }

    this.menu = [];
    this.menu.push(home);
    this.menu.push(news);
    this.menu.push(specialist);
    this.menu.push(serviceUnit);

  //   switch (this.userAccount.group) {
  //     case "MU":
  //       this.menu.push(dashboard);
  //       this.menu.push(training);
  //       this.menu.push(serviceUnit);
  //       this.menu.push(category);

  //       masterData.child.push(faculty);
  //       this.menu.push(masterData);

        
  //       // this.menu.push(collectAndMeasuring);

  //       break;

  //     case "faculty":
  //       this.menu.push(dashboard);
  //       this.menu.push(training);
  //       this.menu.push(serviceUnit);
  //       //this.menu.push(specialist);
  //       this.menu.push(standard);
  //       //this.menu.push(assignmentServe);
  //       break;

  //     case "serviceUnit":
  //       this.menu.push(dashboard);
  //       break;

  //     default:
  //       break;
  //   }
  }
}
