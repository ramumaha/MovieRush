import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieService } from 'src/app/shared/movie.service';
import { Movie } from '../../shared/movie.model';
import { Review } from '../review.model';
import { reviewSerivce } from '../reviews.service';
@Component({
  selector: 'app-review-edit',
  templateUrl: './review-edit.component.html',
  styleUrls: ['./review-edit.component.css']
})
export class ReviewEditComponent implements OnInit {
  @ViewChild('f')rForm:NgForm
  id:number;
  movie:Movie;
  currentRate=0;
  @Input()activated=false;
  subscription:Subscription;
  constructor(private router:Router,
    private route:ActivatedRoute,
    private movieservice:MovieService,private reviewservice:reviewSerivce)      
     { }

  ngOnInit(): void {
    this.subscription=this.reviewservice.movieSelected
      .subscribe(
        (movie:Movie)=>{
         this.movie=movie;
  
        }
      );
  }
  revertback(){
    // alert('Do you want to delete you review?')

    this.rForm.reset();
    this.router.navigate(['../'],{relativeTo:this.route})
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

  onSubmit(form:NgForm){
    const value=form.value;
    const newReview=new Review(this.movie.imageAlt,
      this.currentRate,
      value.headline,value.review,
      value.username,value.spoilers);
      this.reviewservice.addReview(newReview);
      form.reset();
  }


}
