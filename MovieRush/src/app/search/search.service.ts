import { of } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { share } from 'rxjs/operators'
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
  movieDetails:any
    constructor(
        private httpClient:HttpClient
    ){}

    searchGetCall(term:string){
        if(term==''){
          return of([]);
        }
        return this.httpClient.get('http://www.omdbapi.com/?s=' + term + '&apikey=' + APIKEY, { params: PARAMS.set('search', term) });
      }

      getDetails(imdbID: string){        
        return this.httpClient.get('http://www.omdbapi.com/?i=' + imdbID + '&apikey=' + APIKEY, { params: PARAMS.set('search', imdbID) });
       
        }


    
}