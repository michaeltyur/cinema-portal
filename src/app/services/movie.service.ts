import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../shared/models/movie';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl = 'http://www.omdbapi.com?plot=full';
  private apiKey ="2e9cd746";
  private movieId='tt';

  constructor(private http: HttpClient) {

   }

  getMovieById(id:string):Observable<Movie>{

    const url = this.baseUrl + '&' + 'tt1234567' + this.apiKey;
   let test=this.http.get<Movie>(url);
   test.subscribe(res=>
    {
      debugger;
    });
    return  test;
  }

}
