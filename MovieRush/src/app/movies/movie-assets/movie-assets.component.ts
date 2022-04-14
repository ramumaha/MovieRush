import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-assets',
  templateUrl: './movie-assets.component.html',
  styleUrls: ['./movie-assets.component.css']
})
export class MovieAssetsComponent implements OnInit {
  isActive:boolean;
 
  constructor() { }

  ngOnInit(): void {
  }
  toggleColor(){
    this.isActive=!this.isActive;    

  }



}
