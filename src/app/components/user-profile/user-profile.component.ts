import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { ApiService, TokenService, ValidateForm, getFormValidationErrors } from "src/app/shared";
import {
  AbstractControl,
  Form,
  FormArray,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators,
} from "@angular/forms";
import { forkJoin, Observable } from "rxjs";
import Swal from "sweetalert2";
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @ViewChild("form") validateForm: NgForm | undefined;

  id: any;
  sub: any;
  form!: FormGroup;
  model: any = {};
  searchFaculty: any = [];
  isEdit: boolean = false;
  facCode: any | undefined;
  showChangePassword: boolean = false;
  
  constructor(
    private activatedroute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private translate: TranslateService,
    private tokenService: TokenService,
    private apiService: ApiService,
    private router: Router
  ) { 
    this.activatedRoute.paramMap.subscribe((params) => {
      this.facCode = params.get('code');
    });

  }

  ngOnInit(): void {
    this.buildForm();
    const userProfile = this.tokenService.userProfile;
    console.log(userProfile);
    if(userProfile){
      this.isEdit = !this.isEdit;
      this.apiService.get("user-profile/find-username/"+userProfile.username).subscribe(
        (response: any) => {
          this.model = response;
          this.buildForm();
          this.bindingRole();

        },
        (err: any) => {
          console.log(err);
        }
      );
    }


    this.initDataFromAPI().subscribe((data: any) => {
      this.searchFaculty = data[0];
      this.searchFaculty = this.sortingObject(this.searchFaculty, "code");
    });
    

  }

  sortingObject(Object: any, sortAttr: string): any{
    return Object.sort((firstEle: any,secondEle: any) => {
      if (firstEle["sortAttr"] > secondEle["sortAttr"]) {
          return 1;
      }
      if (firstEle["sortAttr"] < secondEle["sortAttr"]) {
          return -1;
      }
      return 0;
    })
  }

  initDataFromAPI(): Observable<any[]> {
    var faculty = this.apiService.get("faculty");
    return forkJoin([faculty]);
  }

  create(model: any): void {   

    model.roles.push({
      type: 'user',
      group: 'faculty',
      accessScope: this.facCode
    });

    this.apiService.post("user-profile/new", model).subscribe(
      (response: any) => {
        if (response.status) {
          Swal.fire(
            'เพิ่มผู้ใช้',
            'เพิ่มผู้ใช้สำเร็จ !',
            'success'
          ).then(() => {
            this.router.navigate(['./'], {
              relativeTo: this.activatedroute.parent,
            });
          });
        } else {
          Swal.fire('เพิ่มผู้ใช้', 'เพิ่มผู้ใช้ไม่สำเร็จ!', 'error');
        }      },
      (err: any) => {
        Swal.fire('เพิ่มผู้ใช้', err.error, 'error');
      }
    );
    
  }

  update(model: any): void {
    model.id = this.model.id; 
    this.apiService.post("user-profile/update-user", model).subscribe(
      (response: any) => {
        if (response.status) {
          Swal.fire(
            'แก้ไขข้อมูลผู้ใช้',
            'แก้ไขข้อมูลสำเร็จ !',
            'success'
          ).then(() => {
            this.router.navigate(['./'], {
              relativeTo: this.activatedroute.parent,
            });
          });
        } else {
          Swal.fire('แก้ไขข้อมูลผู้ใช้', 'แก้ไขข้อมูลผู้ใช้ไม่สำเร็จ!', 'error');
        }      },
      (err: any) => {
        Swal.fire('แก้ไขข้อมูลผู้ใช้', err.error, 'error');
      });
  }
  buildForm(): void {
    this.form = this.formBuilder.group({
      username: [this.model.username || null, Validators.required],
      enFirstName: [this.model.enFirstName || null, Validators.required],
      enLastName: [this.model.enLastName || null, Validators.required],
      accountType: [this.model.accountType || null, Validators.required],
      email: [this.model.email || null, [Validators.required, Validators.pattern],
      ],    
      roles: this.formBuilder.array([]),
    });
  }

  get roleForm() {
    return this.form.get('roles') as FormArray;
  }

  bindingRole():void{
    const Roles = this.model.roles || [];
    const RolesForm = this.form.get('roles') as FormArray;

    Roles.forEach((role: any) => {
      const form = this.formBuilder.group({
        type: [role.type],
        group: [role.group],
        accessScope: [role.accessScope],
      });
      RolesForm.push(form);
    });
  }

  toggleChangePassword(){
    this.showChangePassword =!this.showChangePassword;
    console.log(this.showChangePassword);
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

  validateAllForm(): any {
    return getFormValidationErrors(this.form);
  }

  @ValidateForm("form")
  save(): void {
    let model = this.form.value;
    this.update(model);
  }
}
