import { Component, ElementRef, forwardRef, Input, OnInit, ViewChild } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { ApiService } from "../..";

@Component({
  selector: "app-upload-file",
  templateUrl: "./upload-file.component.html",
  styleUrls: ["./upload-file.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UploadFileComponent),
      multi: true,
    },
  ],
})
export class UploadFileComponent implements ControlValueAccessor {

  @Input() readonly!: boolean;
  @ViewChild("inputFile") inputFile: ElementRef<HTMLElement> | undefined;

  id: string = "";
  name: string = "";
  extension: string = "";
  private _value: any = {};

  constructor(private apiService: ApiService) {
   }

  get value(): any {
    return this._value;
  }

  // set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }

  writeValue(obj: any): void {
    if (obj !== this._value) {
      this._value = obj;
    }

    if (obj == null) {
      this.name = "";
      this.extension = "";
    } else {
      this.name = obj.name;
      this.extension = obj.extension;
    }
  }

  onChange: any = () => { };
  onTouch: any = () => { };

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  triggerFile(event: any): void {
    this.inputFile?.nativeElement.click();
  }

  handleFileInput(target: any): any {
    if (!target) {
      return;
    }

    var fileItem: any = target?.files.item(0);

    if (!fileItem) {
      return;
    }

    var size: any = fileItem?.size;
    if (size && size >= 20000000) {
      this._value = {};
      return;
    }

    var ext: string = fileItem?.name.split(".").pop();
    this.apiService.upload(this.id, fileItem).subscribe((response: any) => {
      this.id = response.id;
      this.name = response.name;
      this.extension = response.extension;

      this._value = response;
      this.onChange(response);

    }, (err: any) => {
      console.log("error ", err);
    });
  }

  download(): void {
    this.apiService.download(this.id).subscribe((res: any) => {
      const a: any = document.createElement("a");
      const objectUrl: any = URL.createObjectURL(res.body);
      a.href = objectUrl;
      a.download = this.name;
      a.click();
      URL.revokeObjectURL(objectUrl);
    }, (err: any) => {
      console.log("error ", err);
    });
  }

  ngOnInit(): void {
  }
}
