import { AbstractControl } from '@angular/forms';

export function WhitespaceValidator(control: AbstractControl) {
  if (control.value.startsWith(' ')){
    return { whitespace: true };
  }
  return null;
}