import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  pushRightClass!: string;
  userAccount!: any;

  constructor(public router: Router) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
        this.toggleSidebar();
      }
    });
  }

  ngOnInit(): void {
    this.pushRightClass = "push-right";
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

  onLoggedout(): void {
    localStorage.removeItem("isLoggedin");
  }
  
}
