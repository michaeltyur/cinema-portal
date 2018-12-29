import { Injectable, EventEmitter } from '@angular/core';
import { Alert } from '../shared/models/alert';


@Injectable({
  providedIn: 'root'
})
export class AlertService {

  movieAlertEmitter$:EventEmitter<Alert>;

  constructor() {
    this.movieAlertEmitter$=new EventEmitter<Alert>();
   }

   emitMessage(type:string,content:string){
     if(content && type) {
       this.movieAlertEmitter$.emit(new Alert(type,content))
     }
    
   }
}
