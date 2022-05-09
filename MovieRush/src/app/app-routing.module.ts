import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { RegisterComponent } from './register/register.component';
import { ReviewEditComponent } from './reviews/review-edit/review-edit.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

const routes: Routes = [
  {path:"",redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent,children:[
    {path:':movie',component:MovieDetailsComponent}
  ]},
  {path:'signin',component:RegisterComponent},
  {path:'watchlist',component:WatchlistComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
