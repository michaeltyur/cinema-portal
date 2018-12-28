import { AbstractControl } from '@angular/forms';
import { MovieService } from '../services/movie.service';
import { catchError, map, tap } from 'rxjs/operators';

export class ValidateTitleNotExist{
  static createValidator(movieService: MovieService,name:string) {
    return (control: AbstractControl) => {
      if(control.value===name)return null;
      return movieService.getMovieByName(control.value).subscribe(res=>
        {
          if (!res) 
          return null; 
          else return  { titleExist: true }
        });
      }

  }
}