import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ReviewEditComponent } from './reviews/review-edit/review-edit.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

const routes: Routes = [
  {path:"",redirectTo:'/signin',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'signin',component:RegisterComponent},
  {path:'watchlist',component:WatchlistComponent},
  {path:'profile',component:ProfileComponent},
  {path:':id',component:MovieDetailsComponent,children:[
    {path:'',component:ReviewsComponent},
    {path:'review',component:ReviewEditComponent},  
    
  ]}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
