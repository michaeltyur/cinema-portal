import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import{ moviesName } from '../../shared/models/consts'

const moviesTitels="";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
 
  movies:Movie[];
  selectedMovie:Movie;

  constructor(private movieService:MovieService) { 
    this.movies=[];
  }

  ngOnInit() {
    this.getListOfMovies();
  }

   getListOfMovies():void{
    for (let index = 0; index < moviesName.length; index++) {
       this.movieService.getMovieByName(moviesName[index]).subscribe(res=>{
         this.movies.push(res);
       });
   }
  }
}
