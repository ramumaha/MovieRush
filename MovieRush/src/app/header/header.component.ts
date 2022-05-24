import { Component,EventEmitter,Input,Output,OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";
import { AuthService } from "../register/auth.service";
@Component({
    selector:'header-component',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderConponent implements OnInit {
   @Output()  notify:EventEmitter<string>=new EventEmitter();
   status:Boolean=false;
   constructor(
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router:Router
    ){}
    ngOnInit(): void {
        this.authService.signin.subscribe(state=>{
            this.status=state; 
        });
        
    }
   onSelect(select:string){
       console.log(select);
       this.notify.emit(select);
   }

   navigateWatchlist(){
       if(!this.status){
        this.flashMessage.show("Login to access",{cssClass:'alert-danger',timeout:4000});
           this.router.navigate(['/signin']);
       }else{
           this.router.navigate(['/watchlist']);
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