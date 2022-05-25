import { of } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

const APIKEY="916ed1a0";
const PARAMS= new HttpParams({
  fromObject:{
    action:"opensearch",
    format:"json",
    origin:"*"
  }
});


@Injectable()
export class SearchService{

    constructor(
        private httpClient:HttpClient
    ){}

    searchGetCall(term:string){
        if(term==''){
          return of([]);
        }
        return this.httpClient.get('http://www.omdbapi.com/?s=' + term + '&apikey=' + APIKEY, { params: PARAMS.set('search', term) });
      }

      getDetails(movie: any){
        // this.name= movie.Title;
        // this.isShowDiv = false;
        // this.httpClient.get('http://www.omdbapi.com/?i=' + movie.imdbID + '&apikey=' + APIKEY, { params: PARAMS.set('search', movie.imdbID) })
        // .subscribe(data=> {
        // console.log('res', data);
        // this.movieDetails=data;
        // })
        
        return this.httpClient.get('http://www.omdbapi.com/?i=' + movie.imdbID + '&apikey=' + APIKEY, { params: PARAMS.set('search', movie.imdbID) });
       
        }


    
}