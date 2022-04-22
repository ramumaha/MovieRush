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
import { MovieAssetsComponent } from './movies/movie-assets/movie-assets.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    MovieListComponent,
    AppComponent,
    HeaderConponent,
    RegisterComponent,
    MoviesComponent,
    MovieDetailsComponent,
    MovieItemComponent,
    ReviewsComponent,
    ReviewEditComponent,
    MovieAssetsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
