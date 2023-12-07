import { Component, ElementRef, OnInit } from "@angular/core";

@Component({
  selector: "app-public",
  templateUrl: "./public.component.html",
  styleUrls: ["./public.component.scss"]
})
export class PublicComponent implements OnInit {

  collapedSideBar: boolean = false;


  constructor(private elementRef: ElementRef) {
    
   }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = '#F8F8F8';
  }
  ngOnInit(): void {

  }

  receiveCollapsed($event: any): void {
    this.collapedSideBar = $event;
  }

}
