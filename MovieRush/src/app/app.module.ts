import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderConponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewEditComponent } from './reviews/review-edit/review-edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { DropDownDirective} from './shared/dropdown.directive';
import {MovieService} from './shared/movie.service';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { reviewSerivce } from './reviews/reviews.service';

@NgModule({
  declarations: [
    MovieListComponent,
    AppComponent,
    HeaderConponent,
    RegisterComponent,
    MoviesComponent,
    MovieDetailsComponent,
    ReviewsComponent,
    ReviewEditComponent,
    HomeComponent,
    DropDownDirective,
    WatchlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    IvyCarouselModule,
    AppRoutingModule
  ],
  providers: [MovieService,reviewSerivce],
  bootstrap: [AppComponent]
})
export class AppModule { }
