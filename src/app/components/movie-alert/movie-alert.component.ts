import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import { AlertService } from 'src/app/services/alert.service';
import { Alert } from 'src/app/shared/models/alert';

@Component({
  selector: 'app-movie-alert',
  templateUrl: './movie-alert.component.html',
  styleUrls: ['./movie-alert.component.css']
})
export class MovieAlertComponent implements OnInit {

  private alertSubject = new Subject<Alert>();

  staticAlertClosed = false;
  alert:Alert;


  constructor(private alertService:AlertService) {
    alertService.movieAlertEmitter$.subscribe(alert=>this.addMessage(alert));
   }

  ngOnInit() {
    setTimeout(() => this.staticAlertClosed = true, 20000);

    this.alertSubject.subscribe((message) =>
    { 
      this.alert = message;
    });
    this.alertSubject.pipe(
      debounceTime(2000)
    ).subscribe(() => this.alert = null);
  }

  public addMessage(alert:Alert) {
    if (alert) {
      this.alertSubject.next(alert);
    }
    
  }
}

 

