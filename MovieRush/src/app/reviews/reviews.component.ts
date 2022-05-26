import { Component, Input, OnInit,Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../shared/movie.model';
// import { MovieService } from '../shared/movie.service';
import { Review } from './review.model';
import { reviewSerivce } from './reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  currentRate = 8;
  isReadonly = false;
  movie:Movie;
  id:number;
  reviews:Review[];
  reviewPresent=false;
  constructor(private route:ActivatedRoute,
    private router:Router,private reviewservice:reviewSerivce) {
    
   }


  ngOnInit(): void {
    this.id=+this.route.snapshot.params['id'];
    // this.movie=this.movieservice.getMovieById(this.id);
  
  }

  onCLick(){
    this.reviewservice.movieSelected.next(this.movie);
    this.navigate();

  }
  
  navigate(){
  
    this.router.navigate(['review'],{relativeTo:this.route})
  }

}
