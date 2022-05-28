import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http'
import {map} from 'rxjs/operators';
import { AuthService } from "../register/auth.service";
@Injectable()
export class WatchListService{
    constructor(private authservice:AuthService,
        private http:HttpClient){}
    addmovie(movie){
        let headers=new HttpHeaders();
        headers.append('Content-Type','application/json');
       this.authservice.loadId();
    //    console.log(this.authservice.id);

        console.log(this.http.post('http://localhost:3000/users/addmovie',{"id":this.authservice.id,"movie":movie}, {
            headers: headers,
            observe: 'response'
          }).pipe(map((res:HttpResponse<JSON>)=> res)));
        return this.http.post('http://localhost:3000/users/addmovie',{"id":this.authservice.id,"movie":movie}, {
            headers: headers,
            observe: 'response'
          }).pipe(map((res:HttpResponse<JSON>)=> res));

    }
}