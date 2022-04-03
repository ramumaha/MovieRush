import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderConponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MovieItemComponent } from './movies/movie-list/movie-item/movie-item.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewEditComponent } from './reviews/review-edit/review-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderConponent,
    RegisterComponent,
    MoviesComponent,
    MovieListComponent,
    MovieDetailsComponent,
    MovieItemComponent,
    ReviewsComponent,
    ReviewEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
