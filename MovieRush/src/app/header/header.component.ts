import { Component,EventEmitter,Output } from "@angular/core";

@Component({
    selector:'header-component',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderConponent{
   @Output()  notify:EventEmitter<string>=new EventEmitter();

   onSelect(select:string){
       console.log(select);
       this.notify.emit(select);
   }

}