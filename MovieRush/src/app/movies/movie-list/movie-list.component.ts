import { Component, OnInit ,Input} from '@angular/core';
import { Movie } from 'src/app/shared/movie.model';
import { MovieService } from 'src/app/shared/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  
})
export class MovieListComponent implements OnInit {
  @Input() posters:Movie[]=[];
  fundClassDetailsViewModelData = [];
  transpose = true;
  constructor(private movieservice:MovieService ){}
  ngOnInit() {
    this.posters=this.movieservice.getMovies();
  }
  


  toggleTranspose() {
    this.transpose = !this.transpose;
  }


}

