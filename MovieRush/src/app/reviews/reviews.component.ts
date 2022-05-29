import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../search/search.service';


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
  movie:any;
  cast:any;
  id:number;
  reviews:Review[];
  reviewPresent=false;
  constructor(private route:ActivatedRoute,
    private searchservie:SearchService,
    private router:Router,private reviewservice:reviewSerivce) {
    
   }


  ngOnInit(): void {
    this.id=+this.route.snapshot.params['id'];
    console.log(this.searchservie.movieDetails);
    this.cast=this.searchservie.movieDetails['Actors'].split(',');
  
  }

  onCLick(){
    this.navigate();

  }
  
  navigate(){
  
    this.router.navigate(['review'],{relativeTo:this.route})
  }

}
