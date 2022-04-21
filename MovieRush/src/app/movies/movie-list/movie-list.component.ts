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
  @Input() movies:Movie[]=[
    new Movie('Test','this is test','https://assetscdn1.paytm.com/images/cinema/KGF-1035x420-c3374de0-b6ff-11ec-9639-8322852eadd4.jpg','action')

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
