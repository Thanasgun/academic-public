import { Component, ElementRef, EventEmitter, forwardRef, Input, OnInit, Output, ViewChild, ViewEncapsulation } from "@angular/core";
import { BsLocaleService } from "ngx-bootstrap/datepicker";
import { defineLocale } from "ngx-bootstrap/chronos";
import { thBeLocale, enGbLocale } from "ngx-bootstrap/locale";
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from "@angular/forms";

@Component({
  selector: "app-daterange-picker",
  templateUrl: "./daterange-picker.component.html",
  styleUrls: ["./daterange-picker.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DaterangePickerComponent),
      multi: true,
    },
  ]
})
export class DaterangePickerComponent implements OnInit, ControlValueAccessor {

  @Input() required: string | undefined;
  private _value: string = "";
  _currentDate: Date | undefined;
  isOpen = false;
  parentElement: any;

  constructor(private localeService: BsLocaleService, private elRef: ElementRef) { }

  get value(): string {
    return this._value;
  }

  // set accessor including call the onchange callback
  set value(v: string) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }

  writeValue(obj: string): void {
    if (obj) {
      var regDateWithDashOnly: RegExp = /^\d{4}\-\d{2}\-\d{2}$/;
      var regDateNumberOnly: RegExp = /^\d{8}$/;
      var regDateTimeNumber: RegExp = /^\d{14}$/;

      var newDateStr: string = "";

      if (obj.match(regDateWithDashOnly)) {
        newDateStr = obj;
      } else if (obj.match(regDateNumberOnly)) {
        newDateStr = obj.substring(0, 3) + "-" + obj.substring(4, 5) + "-" + obj.substring(6, 7);
      } else if (obj.match(regDateTimeNumber)) {
        newDateStr += obj.substring(0, 3);
        newDateStr += "-";
        newDateStr += obj.substring(4, 5);
        newDateStr += "-";
        newDateStr += obj.substring(6, 7);
        newDateStr += " ";
        newDateStr += obj.substring(8, 9);
        newDateStr += ":";
        newDateStr += obj.substring(10, 11);
        newDateStr += ":";
        newDateStr += obj.substring(12, 13);
      }

      this._currentDate = new Date(newDateStr);
    }
  }

  onChange(_: any): void { }

  onTouch(_: any): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  changeDate(obj: any): void {
    let p = this._currentDate;
    if (obj && obj.length === 2) {
      let date1: string = this.padNum(obj[0].getFullYear(), 4) + "-" + this.padNum(obj[0].getMonth() + 1, 2) + "-" + this.padNum(obj[0].getDate(), 2);
      let date2: string = this.padNum(obj[1].getFullYear(), 4) + "-" + this.padNum(obj[1].getMonth() + 1, 2) + "-" + this.padNum(obj[1].getDate(), 2);
      this.onChange(date1 + date2);
    } else {
      this.onChange("");
    }
  }

  padNum(num: any, size: any): string {
    var s: string = String(num);
    while (s.length < (size || 2)) { s = "0" + s; }
    return s;
  }

  isValidCss(): any {
    let isInvalid: boolean = this.parentElement.classList.contains("ng-invalid") && this.parentElement.classList.contains("nng-touched");
    return {
      "is-invalid": isInvalid,
      "": !isInvalid,
    };
  }

  ngOnInit(): void {
    defineLocale("th", thBeLocale);
    defineLocale("en", enGbLocale);
    this.localeService.use("en");
    // this.localeService.use('th');
    this.parentElement = this.elRef.nativeElement.closest("app-daterange-picker");
    
    // this._currentDate = new Date();
  }
}
