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
   options={
    maxRating : 10,
    readOnly:true
     
  }
  currentRate = 8;
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
    this.cast=this.searchservie.movieDetails['Actors'].split(',');
    this.currentRate=Math.floor(this.searchservie.movieDetails['Ratings'][0]['Value'].split('/')[0]);
  
  }

  onCLick(){
    console.log();
    if(localStorage['user']){
    this.navigate();}
    else{
      this.router.navigate(['signin']);
    }

  }
  
  navigate(){
  
    this.router.navigate(['review'],{relativeTo:this.route})
  }

}