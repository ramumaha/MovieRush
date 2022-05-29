import { Component, OnInit } from '@angular/core';
import { AuthService } from '../register/auth.service';
import { WatchListService } from './watchlist.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import { Router } from '@angular/router';

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
    private authservice:AuthService,
    private watchlistservice:WatchListService,
    private flashMessage:FlashMessagesService,
    private router:Router,
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

  removemovie(movie){
    console.log(movie);
    this.watchlistservice.removemovie(movie).subscribe(
      data=>{
        console.log(data);
        if(data.ok){
          this.flashMessage.show("Movie Removed",{cssClass:'alert-success',timeout:4000});
          this.router.navigate(['/watchlist']);
        }else{
          this.flashMessage.show("Movie not found",{cssClass:'alert-danger',timeout:4000});
        }
        
      }
    )
  }

}
