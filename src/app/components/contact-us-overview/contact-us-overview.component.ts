import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-contact-us-overview',
  templateUrl: './contact-us-overview.component.html',
  styleUrls: ['./contact-us-overview.component.scss']
})
export class ContactUsOverviewComponent implements OnInit {
  //apiLoaded: Observable<boolean>;
  constructor() {
    // this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE', 'callback')
    //     .pipe(
    //       map(() => true),
    //       catchError(() => of(false)),
    //     );
  }

  ngOnInit(): void {
  }

}
