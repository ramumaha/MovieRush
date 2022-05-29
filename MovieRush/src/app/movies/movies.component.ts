import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  @Input() movie:any;
  constructor() { }
  show=false;
  ngOnInit(): void {
  }

  toggle(){
    this.show=!this.show;

  }

}
