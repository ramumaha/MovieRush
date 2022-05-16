import { EventEmitter, Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Movie } from "../shared/movie.model";

@Injectable({
     providedIn: 'root',
})
export class reviewSerivce{
     movieSelected:Subject<Movie>= new BehaviorSubject<Movie>(null);;

   
    



}