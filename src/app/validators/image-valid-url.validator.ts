
import { AsyncValidatorFn, AbstractControl, ValidationErrors  } from '@angular/forms';
import { map, debounceTime } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class ImageValidUrlValidator{
  static createValidator( http: HttpClient): AsyncValidatorFn
  {
    return (control: AbstractControl):  Promise<{ [key: string]: any } | null> =>
    {
        return http.get(control.value,{responseType: 'text'}).toPromise()
        .then(success=>
            {
                return null;
            })
        .catch(error=>
            {
                return {'imageValid': true}
            });

    }
                                         
  }
}