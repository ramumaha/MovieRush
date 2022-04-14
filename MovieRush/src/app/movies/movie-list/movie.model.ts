import { Time } from "@angular/common";

export class Movie{
    public name:string;
    public movieGenre:string;
    public desc:string;
    public imgPath:string;

    constructor(name:string,desc:string,imgPath:string,movieGenre:string){
        this.name=name;
        this.desc=desc;
        this.imgPath=imgPath;
        this.movieGenre=movieGenre;
    }

}