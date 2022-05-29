import {  Injectable } from "@angular/core";
import {Subject } from "rxjs";
import { Review } from "./review.model";
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http'
import {map} from 'rxjs/operators';
import { AuthService } from "../register/auth.service";

@Injectable({
     providedIn: 'root',
})
export class reviewSerivce{
     reviewadded=new Subject<Review[]>();
     constructor(private http:HttpClient,
          private authservice:AuthService){}
     public review:Review[]=[
          {
               moviename:"inside out",
               rating:9,
               headline:"Worth Watching",
               review:"It is a very funny movie..Informative and opens up a new world",                 
               name:"ramu",
               spoiler:"no",             

          }
     ];
     addReview(review:Review){
          let headers=new HttpHeaders();
          headers.append('Content-Type','application/json');
          this.authservice.loadId();
          return this.http.post('http://localhost:3000/users/addreview',{"id":this.authservice.id,"review":review,},{
               headers:headers,
               observe:'response'
          }).pipe(map((res:HttpResponse<JSON>)=>res))
         

     }
     displayReview():Review[]{
          return this.review.slice();

     }

   
    



}