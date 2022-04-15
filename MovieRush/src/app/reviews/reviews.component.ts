import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  max = 5;
  rate = 2;
  isReadonly = false;
  constructor() { }


  ngOnInit(): void {
  }

}
