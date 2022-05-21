import {  Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Movie } from "../shared/movie.model";
import { Review } from "./review.model";

@Injectable({
     providedIn: 'root',
})
export class reviewSerivce{
     movieSelected:Subject<Movie>= new BehaviorSubject<Movie>(null);
     reviewadded=new Subject<Review[]>();
     public review:Review[]=[
          {
               moviename:"inside out",
               rating:9,
               headline:"Worth Watching",
               review:"It is a very funny movie..Informative and opens up a new world",                 
               name:"ramu",
               spoiler:"no",             

          }
     ];
     addReview(review:Review){
          this.review.push(review);
          this.reviewadded.next(this.review.slice());

     }
     displayReview():Review[]{
          return this.review.slice();

     }

   
    



}