import { Component, OnInit ,Input} from '@angular/core';
import { MovieService } from 'src/app/shared/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  
})
export class MovieListComponent implements OnInit {
  @Input() posters=[];
  fundClassDetailsViewModelData = [];
  transpose = true;
  user=false;
  constructor(private movieservice:MovieService ){}
  ngOnInit() {
    this.posters=this.movieservice.getMovies();
    if(localStorage['user']){
      this.user=true;
    }
  }
  


  toggleTranspose() {
    this.transpose = !this.transpose;
  }


}

