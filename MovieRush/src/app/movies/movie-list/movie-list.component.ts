import { Component, OnInit ,Input} from '@angular/core';


interface moviePoster{
  posterSrc:string;
  posterAlt:string;
}

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() posters:moviePoster[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  onClicked():void{

  }

}
