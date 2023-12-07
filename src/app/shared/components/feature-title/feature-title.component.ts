import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-title',
  templateUrl: './feature-title.component.html',
  styleUrls: ['./feature-title.component.scss']
})
export class FeatureTitleComponent implements OnInit {

  @Input() text: string|undefined;
  @Input() line: boolean = false;
  @Input() redirectTo: string|undefined;

  constructor() { }

  ngOnInit(): void {
  }


}
