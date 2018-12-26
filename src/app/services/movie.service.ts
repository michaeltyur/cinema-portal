import { Injectable } from '@angular/core';
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

  constructor(private http: HttpClient) {

   }

  getRandomMovie():Observable<Movie>{
    let id= this.getRundomMovieId();
    const url = `${this.baseUrl}&i=${id}&${this.apiKey}`;
   return this.http.get<Movie>(url);
  }

  getMovieByName(title:string):Observable<Movie>{
    const url = `${this.baseUrl}&t=${title}&${this.apiKey}`;
    return this.http.get<Movie>(url);
  }

  private getRundomMovieId():string{
   let randNumber= Math.floor(Math.random() * 1999999) + 1  ;
   return `tt${randNumber}`;
  }
}
