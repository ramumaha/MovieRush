import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http'
import {map} from 'rxjs/operators';
import { Subject } from "rxjs";

@Injectable()
export class AuthService{
    authToken:any;
    user:any;
    signedin=false;
    signin=new Subject<Boolean>();
    response:any;
    id:any;

    constructor(private http:HttpClient){}

    registerUser(user){
        let headers=new HttpHeaders();
        headers.append('Content-Type','application/json');
        return this.http.post('http://localhost:3000/users/register', user, {
            headers: headers,
            observe: 'response'
          }).pipe(map((res:HttpResponse<JSON>)=> res));
    }


    authenticateUser(user){
        let headers=new HttpHeaders();
        headers.append('Content-Type','application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, {
            headers: headers,
            observe: 'response'
          }).pipe(map((res:HttpResponse<JSON>)=> res));
    }

    getProfile(){
        this.loadToken();
        return this.http
        .get('http://localhost:3000/users/profile', {
    headers: new HttpHeaders().set('Authorization', this.authToken)
    
  }).pipe(map((res:HttpResponse<Text>)=> res));        

    }

    storeUserData(token,user){
        localStorage.setItem('id_token',token);
        localStorage.setItem('user',JSON.stringify(user));
        this.authToken=token;
        this.user=user;

    }

    loadToken(){
        const token=localStorage.getItem('id_token');
        this.authToken=token;

    }

    loadId(){
        this.id=JSON.parse(localStorage.getItem('user'));
        this.id=this.id.id;
    }

    logout(){
        this.authToken=null;
        this.user=null;
        localStorage.clear();

    }
}