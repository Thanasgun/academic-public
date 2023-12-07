import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation, forwardRef, Input
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { ApiService, UsernameDuplicateValidator } from "src/app/shared";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators, NG_VALUE_ACCESSOR
} from "@angular/forms";
import { ValidateForm } from "src/app/shared";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SignupComponent),
      multi: true,
    },
  ],
})
export class SignupComponent implements OnInit {
  @ViewChild("form") validateForm: NgForm | undefined;

  form!: FormGroup;
  model: any = {};
  accScope: any = {};
  searchFaculty: any = [];
  constructor(private formBuilder: FormBuilder,
    private apiService: ApiService) { }

  ngOnInit(): void {
    this.buildForm();
    this.getDepartment();
  }
  getDepartment(): void {
    this.apiService.get("faculty").subscribe(
      (response: any) => {
        this.searchFaculty = response;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  checkUsername(): void {
    this.apiService.get("Signup/find/" + this.model.username).subscribe(
      (response: any) => {
        if (response.username === this.model.username) {
          console.log("Username is already");
        }
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  buildForm(): void {
    this.form = this.formBuilder.group({
      username: [null, {
        validators: [Validators.required],
        asyncValidators: [UsernameDuplicateValidator.isDuplicate(this.apiService)]
      }],
      password: [null, Validators.required],
      accessScope: [null, Validators.required],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
    });
  }

  isFieldValid(field: string): boolean {
    var notValid: any = this.form!.get(field)?.errors;
    var isTouch: any = this.form!.get(field)?.touched;
    return notValid && isTouch;
  }

  getTouchControl(field: string): any {
    var control: AbstractControl | null = this.form.get(field);
    var isTouch: boolean | undefined = control?.touched;
    return control;
  }

  displayFieldCss(field: string): any {
    return {
      "is-invalid": this.isFieldValid(field),
      "": !this.isFieldValid(field),
    };
  }
  createNewProject(model: any): void {
    this.apiService.post("Signup/new", model).subscribe(
      (response: any) => {
        console.log(response);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  @ValidateForm("form")
  save(): void {
    this.model.roles = ["user"];
    this.model.accessScope = [this.accScope];
    console.log(this.model);
    this.createNewProject(this.model);
  }
}
