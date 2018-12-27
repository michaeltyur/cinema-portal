import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent implements OnInit {

  @Input() movie:Movie;

  constructor(public modal: NgbActiveModal,private movieService:MovieService) {

   }
 
  ngOnInit() {
  }
}
