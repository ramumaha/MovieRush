import { Component,EventEmitter,Input,Output,OnInit } from "@angular/core";
import { AuthService } from "../register/auth.service";
@Component({
    selector:'header-component',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderConponent implements OnInit {
   @Output()  notify:EventEmitter<string>=new EventEmitter();
   status:Boolean=false;
   constructor(private authService:AuthService){}
    ngOnInit(): void {
        this.authService.signin.subscribe(state=>{
            this.status=state;
            console.log(this.status);

            
        });
        console.log(this.status);
        
    }
   onSelect(select:string){
       console.log(select);
       this.notify.emit(select);
   }

}