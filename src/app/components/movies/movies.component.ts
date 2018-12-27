import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import{ moviesName } from '../../shared/models/consts'
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

const moviesTitels="";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
 
  movies:Movie[];
  selectedMovie:Movie;

  constructor(private movieService:MovieService,
              private modalService: NgbModal) { 
    this.movies=[];
  }

  ngOnInit() {
    this.getListOfMovies();
  }

   getListOfMovies():void{
    for (let index = 0; index < moviesName.length; index++) {
       this.movieService.getMovieByName(moviesName[index]).subscribe(res=>{

         this.movies.push(res)
       });
   }
  }

  getMovieDetails(movie:Movie){
    if (movie) {
     // this.movieService.emitMovieDetails(movie);
      const modalRef = this.modalService.open(MovieDetailsComponent, { size: 'lg' });
      modalRef.componentInstance.movie = movie;
    }
    
  }
}
