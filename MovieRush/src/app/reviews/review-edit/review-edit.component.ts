import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Review } from '../review.model';
import { reviewSerivce } from '../reviews.service';
import { SearchService } from 'src/app/search/search.service';
@Component({
  selector: 'app-review-edit',
  templateUrl: './review-edit.component.html',
  styleUrls: ['./review-edit.component.css']
})
export class ReviewEditComponent implements OnInit {
  @ViewChild('f')rForm:NgForm
  currentRate=0;
  movie:any;
  id:any;
  options={
    maxRating : 10,
    readOnly:false
     
  }
  @Input()activated=false;
  subscription:Subscription;
  constructor(private router:Router,
    private route:ActivatedRoute,
    private reviewservice:reviewSerivce,
    private searchservice:SearchService,
    
    )      
     { }

  ngOnInit(): void {
    this.movie=this.searchservice.movieDetails;
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
    const newReview=new Review(this.movie.Title,
      this.movie.imdbID,
      this.currentRate,
      value.headline,value.review,
      value.username,value.spoilers);
      this.reviewservice.addReview(newReview).subscribe(
        (data)=>{
          console.log(data);
        }
      )
      form.reset();
      location.reload();
  }


}
