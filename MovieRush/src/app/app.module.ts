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
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { DropDownDirective} from './shared/dropdown.directive';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { reviewSerivce } from './reviews/reviews.service';
import { FormsModule } from '@angular/forms';
import { SafePipe } from './shared/safepipe.pipe.';
import {HttpClientModule} from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import {FlashMessagesModule} from 'angular2-flash-messages';
import { AuthService } from './register/auth.service';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search/search.service';
import { MovieService } from './shared/movie.service';
import { WatchListService } from './watchlist/watchlist.service';
import { AlifeRatingStarModule } from 'alife-rating-star';





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
    WatchlistComponent,
    SafePipe,
    ProfileComponent,
    SearchComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    AlifeRatingStarModule

  
  ],
  providers: [MovieService,
              reviewSerivce,
              AuthService,
              SearchService,
              WatchListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
