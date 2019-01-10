
import { AsyncValidatorFn, AbstractControl, ValidationErrors  } from '@angular/forms';
import { map, debounceTime } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class ImageValidUrlValidator{
  static createValidator( http: HttpClient): AsyncValidatorFn
  {
    return (control: AbstractControl):  Promise<{ [key: string]: any } | null> =>
    {

        // var img = new Image();

        // img.onload = function() {  return of(null) };
        // img.onerror = function() { return of({'imageValid': true})};
        // img.src = control.value;
        return http.get(control.value,{responseType: 'text'}).toPromise()
        .then(success=>
            {
                return null;
            })
        .catch(error=>
            {
                return {'imageValid': true}
            });
        // pipe(
        //     map(success=>
        //         {
        //             debugger;
        //             if (success) {
        //                 return null;
        //             }
        //             else{
        //                 return {'imageValid': true};
        //             }
                    
        //         }));

    }
                                         
  }
}