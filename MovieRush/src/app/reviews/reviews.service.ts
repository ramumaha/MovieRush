import {  Injectable } from "@angular/core";
import { Review } from "./review.model";
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http'
import {map} from 'rxjs/operators';
import { AuthService } from "../register/auth.service";
const PARAMS= new HttpParams({
     fromObject:{
       action:"opensearch",
       format:"json",
       origin:"*"
     }
   });

@Injectable({
     providedIn: 'root',
})
export class reviewSerivce{
    
     constructor(private http:HttpClient,
          private authservice:AuthService){}
     public review:Review[]=[
          {
               moviename:"inside out",
               imdbID:"1234",
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
     displayReview(imdbId){
          let headers=new HttpHeaders();
          headers.append('Content-Type','application/json');
          return this.http.get('http://localhost:3000/users/displayreview/?id='+imdbId,{
               params:PARAMS.set('search',imdbId)
          }).pipe(map((res:HttpResponse<Text>)=> res));  
     }

   
    



}