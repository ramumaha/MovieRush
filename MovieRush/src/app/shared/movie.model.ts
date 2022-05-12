export class Movie{
   
    public imageSrc:string;
    public imageAlt:string;
    public id?:number;
    public movieGenre?:string;
    public desc?:string;
    public trailerlink?:string;
    public cast?:string[];


    constructor(name:string,imgPath:string,id?:number,
        movieGenre?:string,desc?:string,
        trailerlink?:string,cast?:string[]){
        this.imageSrc=name;
        this.imageAlt=imgPath;
        this.id=id;
        this.desc=desc;
        this.movieGenre=movieGenre;
        this.trailerlink=trailerlink;
        this.cast=cast;
    }

}