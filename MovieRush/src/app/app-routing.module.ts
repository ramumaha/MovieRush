import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ReviewEditComponent } from './reviews/review-edit/review-edit.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SearchComponent } from './search/search.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'signin',component:RegisterComponent},
  {path:'watchlist',component:WatchlistComponent},
  {path:'profile',component:ProfileComponent},
  {path:'search',component:SearchComponent},
  {path:':id',component:MovieDetailsComponent,children:[
    {path:'',component:ReviewsComponent,pathMatch:'full'},
    {path:'review',component:ReviewEditComponent},  
    
  ]},
  {path:"",redirectTo:'/signin',pathMatch:'full'},
  {path:"**",redirectTo:'/signin'},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
