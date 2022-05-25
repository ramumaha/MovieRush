import { Component , ViewChild, ElementRef, OnInit} from '@angular/core';
import { of } from "rxjs";
import { debounceTime, map, distinctUntilChanged, filter} from "rxjs/operators";
import { fromEvent } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";
import {SearchService} from './search.service';

const APIKEY="916ed1a0";
const PARAMS= new HttpParams({
  fromObject:{
    action:"opensearch",
    format:"json",
    origin:"*"
  }
});




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @ViewChild('movieSearchInput',{static:true})
  movieSearchInput!:ElementRef;
  apiResponse:any;
  isSearching:Boolean;
  movieDetails:any;
  name:string;

  constructor(
    private searchService: SearchService,
  ) {
    this.isSearching=false;
    this.apiResponse=[];
    this.movieDetails=[];
   }

  ngOnInit(): void {
    fromEvent(this.movieSearchInput.nativeElement,'keyup').pipe(
      map((event:any)=>{
        return event.target.value;
      }),
      filter(res=>res.length>=2)
      ,debounceTime(1000)
      ,distinctUntilChanged()
    ).subscribe((text:string)=>{
      this.isSearching=true;
      this.searchService.searchGetCall(text).subscribe((res)=>{
        console.log('res',res);
        this.isSearching=false;
        this.apiResponse=false;
      }),(err)=>{
        this.isSearching=false;
        console.log('err',err);
      };
    });
   
   
  }



}
