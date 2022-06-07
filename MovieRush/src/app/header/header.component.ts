import { Component,EventEmitter,Input,Output,OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";
import { fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged, filter, map } from "rxjs/operators";
import { AuthService } from "../register/auth.service";
import { SearchService } from "../search/search.service";

@Component({
    selector:'header-component',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderConponent implements OnInit {
   @Output()  notify:EventEmitter<string>=new EventEmitter();
   status:Boolean=false;
    @ViewChild('movieSearchInput',{static:true})
    movieSearchInput!:ElementRef;
   constructor(
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router:Router,
    private serachservice:SearchService
    ){}
    ngOnInit(): void {
        this.authService.signin.subscribe(state=>{
            this.status=state; 
        });
        if(localStorage['user']){
            this.status=true;
        }
        fromEvent(this.movieSearchInput.nativeElement,'keyup').pipe(
              map((event:any)=>{
                return event.target.value;
              }),
              filter(res=>res.length>=2)
              ,debounceTime(1000)
              ,distinctUntilChanged()
            ).subscribe((text:string)=>{
                this.serachservice.movie=text;
                this.router.navigate(['/search']);
             })
    }

   onSelect(select:string){
       this.notify.emit(select);
   }

   navigateWatchlist(){
       if(localStorage['user']){
        this.router.navigate(['/watchlist']);
        this.status=true;

       }else{
        this.flashMessage.show("Login to access",{cssClass:'alert-danger',timeout:4000});
        this.router.navigate(['/signin']);
       }
   }

   onLogOutClick(){
       this.authService.logout();
       this.flashMessage.show('You are logged out',{
           cssClass:'alert-success',
           timeout:3000
       });
       this.router.navigate(['/signin']);

   }

}