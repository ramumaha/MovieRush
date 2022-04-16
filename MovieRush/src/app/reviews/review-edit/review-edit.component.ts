import { Component, OnInit } from '@angular/core';
import { Movie } from '../../shared/movie.model';
@Component({
  selector: 'app-review-edit',
  templateUrl: './review-edit.component.html',
  styleUrls: ['./review-edit.component.css']
})
export class ReviewEditComponent implements OnInit {
  movies:Movie[]=[
    new Movie('Dunkrik','https://www.hnldesign.nl/wp-content/uploads/2020/08/resized/1920/0/90/0/usm/Dunkirk-Poster-by-hnldesign.jpg')
  ]
  currentRate=0;
  constructor() { }

  ngOnInit(): void {
    
  }

}
