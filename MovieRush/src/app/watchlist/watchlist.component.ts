import { Component, OnInit } from '@angular/core';
import { AuthService } from '../register/auth.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  watchlist:any;
  loaded=false;
  fundClassDetailsViewModelData = [];
  transpose = true;

  constructor(
    private authservice:AuthService
  ) { }

  ngOnInit(): void {
    this.authservice.getProfile().subscribe(user=>{
      this.watchlist=user;
      this.loaded=true;
      },
      err=>{
        console.log(err);
      }
    );
  }
  toggleTranspose() {
    this.transpose = !this.transpose;
  }

}
