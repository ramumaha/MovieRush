import { Component, OnInit ,Input, EventEmitter, Output } from '@angular/core';



interface moviePoster{
  imageSrc:string;
  imageAlt:string;

}

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  
})
export class MovieListComponent implements OnInit {
  @Input() posters:moviePoster[]=[];
  ngOnInit() {
  }
  fundClassDetailsViewModelData = [];
  transpose = true;

  constructor() {

  }

  toggleTranspose() {
    this.transpose = !this.transpose;
  }


}

