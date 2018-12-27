import { Component, OnInit,Input  } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Movie } from 'src/app/shared/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

 @Input() movie:Movie;

 movieForm : FormGroup;

  constructor(private movieService:MovieService,
              public activeModal: NgbActiveModal)
 { 
  this.movieForm=new FormGroup({
    title: new FormControl('',Validators.compose([ 
                              Validators.required, 
                              Validators.minLength(2)])),
    year: new FormControl('', Validators.compose([
                              Validators.required,
                              Validators.min(1900),
                              Validators.max(2019) ])),
    runtime: new FormControl('', Validators.compose([
                                 Validators.required,
                                 Validators.min(1),
                                 Validators.max(250) ])),
    genre: new FormControl('',Validators.required),
    director: new FormControl('',Validators.required),
    poster: new FormControl('',Validators.required)
 });

 }

  ngOnInit() {}

  get title() {
    return this.movieForm.get('title');
  }
  get year() {
    return this.movieForm.get('year');
  }
  get runtime() {
    return this.movieForm.get('runtime');
  }
  get genre() {
    return this.movieForm.get('genre');
  }
  get director() {
    return this.movieForm.get('director');
  }
  get poster() {
    return this.movieForm.get('poster');
  }

  delete():void{
   if (this.movie) {
    this.movieService.emitMovieRemoving(this.movie);
    this.movie=undefined;
   }
  }
}
