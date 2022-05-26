import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { Review } from 'src/app/reviews/review.model';
import { reviewSerivce } from 'src/app/reviews/reviews.service';
import { SearchService } from 'src/app/search/search.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
   @Input()id:any;
   @Input() movie:any;
   isActive:boolean;
   reviews:Review[]=[];

  constructor(private route:ActivatedRoute,
    private reviewservice:reviewSerivce,
    private searchservice:SearchService ) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=params['id'];
     
      }
    )
    this.loadMovie();
    this.reviewservice.reviewadded.subscribe(
      (reviews:Review[])=>{
        this.reviews=reviews;

      }
      );
    this.reviews=this.reviewservice.displayReview();

   
  }
  loadMovie(){
    this.searchservice.getDetails(this.id).subscribe((data)=>{
      this.movie=data;
      this.searchservice.movieDetails=data;
    }),(err)=>{
      console.log("error");
    }

  }


  toggleColor(){
    this.isActive=!this.isActive;    

  }

}
