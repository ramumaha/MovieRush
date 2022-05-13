import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
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


  constructor(private route:ActivatedRoute,private movieservice:MovieService ) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.movie=this.movieservice.getMovieById(this.id);
      }
    )
   
  }
  toggleColor(){
    this.isActive=!this.isActive;    

  }

}
