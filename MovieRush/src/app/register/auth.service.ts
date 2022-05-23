import { Injectable } from "@angular/core";
import {HttpClientModule,HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http'
import {map} from 'rxjs/operators';

@Injectable()
export class AuthService{
    authToken:any;
    user:any;

    constructor(private http:HttpClient){}

    registerUser(user){
        let headers=new HttpHeaders();
        headers.append('Content-Type','application/json');
        return this.http.post('http://localhost:3000/users/register', user, {
            headers: headers,
            observe: 'response'
          }).pipe(map((res:HttpResponse<JSON>)=> res));
    }
}