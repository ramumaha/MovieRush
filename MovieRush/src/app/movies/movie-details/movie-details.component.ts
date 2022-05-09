import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { MovieService } from 'src/app/shared/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
   movie:string;
  


  constructor(private route:ActivatedRoute,private movieservice:MovieService ) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.movie=params['movie'];
      }
    )
  }

  getMovie(movie:string){
    return  this.movieservice.getMoviesByname[movie];
  }

}
