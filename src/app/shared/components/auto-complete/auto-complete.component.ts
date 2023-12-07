import { Component, ElementRef, EventEmitter, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { Observable, Observer, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { ApiService } from '../..';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutoCompleteComponent),
      multi: true,
    },
  ]
})
export class AutoCompleteComponent implements OnInit, ControlValueAccessor {

  @Input() comId!: string;
  @Input() path!: string;
  @Input() required!: string;
  private _value: any;
  errorMessage!: string;
  searchText?: string;
  suggestions$?: Observable<any>;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.suggestions$ = new Observable((observer: Observer<string | undefined>) => {
      observer.next(this.searchText);
    }).pipe(
      switchMap((query: string) => {
        if (query) {
          return this.apiService.get(
            this.path + '/' + query).pipe(
              map((data: any) => {
                return data || [];
              }),
              tap((items) => {
                return items;
              }, err => {
                this.errorMessage = err && err.message || 'Something goes wrong';
              })
            );
        }

        return of([]);
      })
    );
  }

  resetValue() {
    this.searchText = "";
    this.value = {};
  }

  get value() {
    return this._value;
  };


  //set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }

  onSelect(event: TypeaheadMatch): void {
    this.value = event.item;
  }

  writeValue(obj: any): void {
    if (obj) {
      // var regDateWithDashOnly = /^\d{4}\-\d{2}\-\d{2}$/;
      // var regDateNumberOnly = /^\d{8}$/;
      // var regDateTimeNumber = /^\d{14}$/;

      // if (obj.match(regDateWithDashOnly)) {
      //   this._currentDate = new Date(obj);
      // }
      // else if (obj.match(regDateNumberOnly)) {
      //   var newDateStr = obj.substring(0, 3) + '-' + obj.substring(4, 5) + '-' + obj.substring(6, 7);
      //   this._currentDate = new Date(newDateStr);
      // }
      // else if (obj.match(regDateTimeNumber)) {
      //   var newDateStr = obj.substring(0, 3) + '-' + obj.substring(4, 5) + '-' + obj.substring(6, 7) + ' ' + obj.substring(8, 9) + ':' + obj.substring(10, 11) + ':' + obj.substring(12, 13);
      //   this._currentDate = new Date(newDateStr);
      // }
    }
  }

  onChange(_: any) {

  };

  onTouch(_: any) {
  };

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {

  }
}
