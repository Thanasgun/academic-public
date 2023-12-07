import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService, MustMatch, ValidateForm } from 'src/app/shared';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.scss']
})
export class ChangePasswordFormComponent implements OnInit {

  @Input() username: string | undefined;

  show!: boolean;

  changePasswordForm!: FormGroup;

  constructor(private apiService: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }
  
  ngOnChanges(): void {
    if (this.username) {
      this.buildForm();
    }
  }

  buildForm(): void {
    this.changePasswordForm = this.formBuilder.group({
      username: [this.username, Validators.required],
      password: [null, Validators.required],
      passwordConfirm: [null, Validators.required],
      oldPassword: [null, Validators.required],
    },
    {
      validator: MustMatch('password', 'passwordConfirm')
    });

  }

  isFieldValid(form: FormGroup, field: any): boolean {
    var notValid: any = form!.get(field)?.errors;
    var isTouch: any = form!.get(field)?.touched;
    return notValid && isTouch;
  }

  getTouchControl(form: FormGroup, field: any): any {
    var control: AbstractControl | null = form.get(field);
    var isTouch: boolean | undefined = control?.touched;
    return control;
  }

  displayFieldCss(form: FormGroup, field: any): any {
    return {
      "is-invalid": this.isFieldValid(form, field),
      "": !this.isFieldValid(form, field),
    };
  }

  toggle(): void{
    this.show = !this.show;
  }


  @ValidateForm("changePasswordForm")
  confirmChangePassword(): void {

    const changePasswordModel = this.changePasswordForm.value;
    delete changePasswordModel.passwordConfirm;

    this.apiService.post("user-profile/change-password", changePasswordModel).subscribe(
      (response: any) => {
        if (response.status) {
          Swal.fire(
            'Password Changed.',
            'All changes were updated.',
            'success'
          ).then(() => {
            this.toggle();
          });
        } else {
          Swal.fire(
            'Unexpected Problem!',
            'Message - ' + response.message,
            'error'
          );
        }
      },
      (err: any) => {
        Swal.fire('Unexpected Problem!', err, 'error');
      }
    );
  }

}
