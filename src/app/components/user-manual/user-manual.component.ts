import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-user-manual',
  templateUrl: './user-manual.component.html',
  styleUrls: ['./user-manual.component.scss']
})
export class UserManualComponent implements OnInit {

  safeURL: any;
  constructor(private _sanitizer: DomSanitizer){
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/zdxv1oOPLsc');
 }

  ngOnInit(): void {
  }

}
