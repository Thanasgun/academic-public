import { FormGroup, ValidationErrors } from "@angular/forms";

export function ValidateForm(formName: any) {
    return function (target: any, key: any, descriptor: any) {
        const originalMethod: Function = descriptor.value;

        descriptor.value = function (this, ...args: any) {
            let formGroup: FormGroup = this[formName]
            if (ValidateActualForm(formGroup)) {
                originalMethod.apply(this, args);
            }
        };

        return descriptor;
    }
}

// the function which we will execute in the formGroup variable
export function ValidateActualForm(form: FormGroup): boolean {
    if (!form.valid) {
        /* if you are using angular 8 or above, you can just do form.markAllAsTouched() which will touch 
           all the fields without having to loop through all the fields and mark it as touched.
        */
        for (let i in form.controls) {
            let control: any = form.controls[i];
            control.markAsTouched();
            if (control.controls) {
                ValidateActualForm(control);
                console.log(control);
            }
        }
        return false;
    }
    else {
        return true;
    }
}

export function getFormValidationErrors(form: FormGroup): any {

    const result: any = [];
    Object.keys(form.controls).forEach(key => {
        const controlErrors: ValidationErrors | null | undefined = form.get(key)?.errors;
        if (controlErrors) {
            Object.keys(controlErrors).forEach(keyError => {
                result.push({
                    "control": key,
                    "error": keyError,
                    "value": controlErrors[keyError]
                });
            });
        }
    });

    return result;
}


