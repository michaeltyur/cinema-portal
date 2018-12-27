import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HoverDirective } from './directives/hover.directive';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { RuntimeToNumberPipe } from './pipes/runtime-to-number.pipe';
import { TitlePipe } from './pipes/title.pipe';
import { RemoveNonEnglishLetterPipe } from './pipes/remove-non-english-letter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HoverDirective,
    MovieDetailsComponent,
    RuntimeToNumberPipe,
    TitlePipe,
    RemoveNonEnglishLetterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [MovieDetailsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
