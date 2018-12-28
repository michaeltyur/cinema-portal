import {  AsyncValidatorFn, AbstractControl, ValidationErrors  } from '@angular/forms';
import { MovieService } from '../services/movie.service';
import { catchError, map, tap, debounceTime, take } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

export class ValidateTitleNotExist{
  static createValidator(movieService: MovieService,title:string): AsyncValidatorFn
  {
    return (control: AbstractControl):  Observable<{ [key: string]: any } | null> =>
    {

      if(control.value===title)return of(null);

      return movieService.getMovieByName(control.value).pipe(
        debounceTime(1000),
        map(res=>
        {
          //debugger;
          if (!res) {
              null;
          }
           else return { 'titleExist': true };
        }))
    }
                                         
  }
}
