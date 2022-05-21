import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { Review } from 'src/app/reviews/review.model';
import { reviewSerivce } from 'src/app/reviews/reviews.service';
import { Movie } from 'src/app/shared/movie.model';
import { MovieService } from 'src/app/shared/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
   @Input()id:number;
   @Input() movie:Movie;
   isActive:boolean;
   reviews:Review[]=[];

  constructor(private route:ActivatedRoute,
    private movieservice:MovieService,
    private reviewservice:reviewSerivce ) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.movie=this.movieservice.getMovieById(this.id);
      }
    )
    this.reviewservice.reviewadded.subscribe(
      (reviews:Review[])=>{
        this.reviews=reviews;

      }
      );
    this.reviews=this.reviewservice.displayReview();

   
  }
  toggleColor(){
    this.isActive=!this.isActive;    

  }

}
