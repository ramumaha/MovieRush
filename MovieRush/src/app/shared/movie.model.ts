import { Time } from "@angular/common";

export class Movie{
    public name:string;
    public imgPath:string;
    public movieGenre?:string;
    public desc?:string;

    constructor(name:string,imgPath:string,movieGenre?:string,desc?:string){
        this.name=name;
        this.desc=desc;
        this.imgPath=imgPath;
        this.movieGenre=movieGenre;
    }

}