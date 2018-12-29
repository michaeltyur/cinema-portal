import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../shared/models/movie';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies:Movie[];
  private baseUrl = 'http://www.omdbapi.com?plot=full';
  private apiKey ="apikey=c391d863";
  movieRemovingEmitter$:EventEmitter<Movie>;
  movieUpdateEmitter$:EventEmitter<Movie>;

  constructor(private http: HttpClient) {
    this.movieRemovingEmitter$=new EventEmitter();
    this.movieUpdateEmitter$=new EventEmitter();
   }


  getMovieByName(title:string):Observable<Movie>{

    title=this.removeNonReadableCharacters(title);
    
    const url = `${this.baseUrl}&t=${title}&${this.apiKey}`;

    return this.http.get<Movie>(url).pipe(map((res:Object)=>
    {
      if (res['Response']==="True") {
        let movie = this.objToMovie(res);
      return movie;
      } else return undefined;
      
    }
    ));
  }
  emitMovieRemoving(movie:Movie):void{
    if (movie) {
      this.movieRemovingEmitter$.emit(movie);
    }   
  }
  emitMovieUpdater(movie:Movie):void{
    if (movie) {  
      this.movieUpdateEmitter$.emit(movie);
    }   
  }

  getRandomId():string{

    let id="tt";
    let number=Math.floor(Math.random() * 1999999) + 1000000;
    return id+number;
  }

  objToMovie(obj:Object):Movie{
    let movie= new Movie();
          movie.id=obj['imdbID'];
          movie.title=obj['Title'];
          movie.director=obj['Director'];
          movie.genre=obj['Genre'];
          movie.poster=obj['Poster'];
          movie.runtime=obj['Runtime'];
          movie.year=obj['Year'];
         
      return movie;
  }
  private removeNonReadableCharacters(term:string):string{
    if( term )
        {
            term = term.replace(/[#%]/g, '');
            return term;
        }
        else return term;
  }
}
