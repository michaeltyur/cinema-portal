import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { Movie } from '../shared/models/movie';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl = 'http://www.omdbapi.com?plot=full';
  private apiKey ="apikey=c391d863";
  private movieId='tt';
  movieRemovingEmitter$:EventEmitter<Movie>;

  constructor(private http: HttpClient) {
    this.movieRemovingEmitter$=new EventEmitter();
   }


  getMovieByName(title:string):Observable<Movie>{
    const url = `${this.baseUrl}&t=${title}&${this.apiKey}`;
    return this.http.get<Movie>(url).pipe(map((res:Object)=>
    {
      let movie= new Movie();
          movie.id=res['imdbID'];
          movie.title=res['Title'];
          movie.director=res['Director'];
          movie.genre=res['Genre'];
          movie.poster=res['Poster'];
          movie.response=res['Response'];
          movie.runtime=res['Runtime'];
          movie.year=res['Year'];
      return movie;
    }
    ));
  }

  emitMovieRemoving(movie:Movie):void{
    if (movie) {
      this.movieRemovingEmitter$.emit(movie);
    }
    
  }
}
