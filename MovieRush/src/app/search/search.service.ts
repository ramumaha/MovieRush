import { fromEvent, of, Subject } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { ElementRef, Injectable, OnInit } from "@angular/core";
import { debounceTime, distinctUntilChanged, filter, map } from "rxjs/operators";
const APIKEY="916ed1a0";
const PARAMS= new HttpParams({
  fromObject:{
    action:"opensearch",
    format:"json",
    origin:"*"
  }
}); 


@Injectable()
export class SearchService implements OnInit{
  movieDetails:any
  movie:string;
  movieSearch:ElementRef;
  search:any;
    constructor(
        private httpClient:HttpClient
    ){}
  ngOnInit(): void {
    console.log(this.movieSearch);
    fromEvent(this.movieSearch.nativeElement,'keyup').pipe(
      map((event:any)=>{
        return event.target.value;
      }),
      filter(res=>res.length>=2)
      ,debounceTime(1000)
      ,distinctUntilChanged()
    ).subscribe((text:string)=>{
      this.movie=text;
      console.log(this.movie);
    })
  }

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