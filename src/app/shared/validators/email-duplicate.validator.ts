import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { ApiService } from '../services/api.service';

export class EmailDuplicateValidator {
    static isDuplicate(apiService: ApiService): AsyncValidatorFn {

        return (control: AbstractControl) => {
            return new Promise((resolve) => {
                if (control.value === false) { // on switching address closed : false
                    return resolve(null);
                } else {                       // on switching address closed : false
                    // addressID : From Component
                    let model = {
                        email: (control.value as string)
                    };

                    apiService.post('register/checkDuplicate', model).subscribe((data: any) => {
                        if (data && !data.status) {
                            return resolve({ emailDuplicate: true });
                        }

                        return resolve(null);

                    }, (err: any) => {
                        return resolve(null);
                    });
                }
            });
        };
    }
}
