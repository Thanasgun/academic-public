import { AbstractControl } from "@angular/forms";

export const hasRequiredField = (abstractControl: AbstractControl): boolean => {
    if (abstractControl) {
        if (abstractControl.validator) {
            const validator = abstractControl.validator({} as AbstractControl);
            if (validator && validator["required"]) {
                return true;
            }
        }
        if (abstractControl.get('controls')) {
            for (const controlName in abstractControl.get('controls')) {
                if (abstractControl.get('controls')?.get(controlName)) {
                    if (hasRequiredField(abstractControl.get('controls')?.get(controlName) as AbstractControl)) {
                        return true;
                    }
                }
            }
        }
    }

    return false;
};