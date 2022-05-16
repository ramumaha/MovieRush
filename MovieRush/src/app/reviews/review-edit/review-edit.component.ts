import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SubjectSubscription } from 'rxjs/internal-compatibility';
import { MovieService } from 'src/app/shared/movie.service';
import { Movie } from '../../shared/movie.model';
import { reviewSerivce } from '../reviews.service';
@Component({
  selector: 'app-review-edit',
  templateUrl: './review-edit.component.html',
  styleUrls: ['./review-edit.component.css']
})
export class ReviewEditComponent implements OnInit {
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
      )
  }
  revertback(){
    this.router.navigate(['../'],{relativeTo:this.route})
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
