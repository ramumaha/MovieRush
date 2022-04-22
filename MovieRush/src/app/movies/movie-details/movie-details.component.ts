import { Component, OnInit } from '@angular/core';
import {CarouselModule} from 'primeng/carousel';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
   active="watchlist";

  constructor() { }

  ngOnInit(): void {
  }

}
