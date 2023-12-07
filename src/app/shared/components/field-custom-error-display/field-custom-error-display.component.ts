import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-custom-error-display',
  templateUrl: './field-custom-error-display.component.html',
  styleUrls: ['./field-custom-error-display.component.scss']
})
export class FieldCustomErrorDisplayComponent implements OnInit {

  @Input() errorMsg: string | undefined;
  @Input() errorCondition!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
