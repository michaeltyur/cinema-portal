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
              private modalService: NgbModal) 
  { 
    this.movies=[];
    movieService.movieRemovingEmitter$.subscribe((res:Movie)=>{
      if (res) {
        this.movies=this.movies.filter(film=>film.id!=res.id);
        this.selectedMovie=undefined;
      }});

      movieService.movieUpdateEmitter$.subscribe(res=>
      {
        this.createOrUpdateMovie(res);
      });
  
  }
  ngOnInit() {
    this.getListOfMovies();
  }

  createOrUpdateMovie(movie:Movie){
   if (movie) {
     let index=this.movies.findIndex(film=>film.id==movie.id);
     if (index>-1) {
       this.movies[index]=movie;
     }
     else{
      this.movies.push(movie);
     }
   }  
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
      const modalRef = this.modalService.open(MovieDetailsComponent, { size: 'lg' });
      modalRef.componentInstance.movie = movie;
    }
  }
  newMovie():void{
        let newMovie=new Movie();
        this.getMovieDetails(newMovie);
  }
}
