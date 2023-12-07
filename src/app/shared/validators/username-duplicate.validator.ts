import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { ApiService } from "..";

export class UsernameDuplicateValidator {
    static isDuplicate(apiService: ApiService): AsyncValidatorFn {

        return (control: AbstractControl) => {
            return new Promise((resolve) => {
                if (control.value === false) { // on switching address closed : false
                    return resolve(null);
                } else {                       // on switching address closed : false
                    // addressID : From Component
                    apiService.get("user-profile/check-exist-username/" + (control.value as string)).subscribe((data: any) => {
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
