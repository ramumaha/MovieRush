export class Movie{
   
    public imageSrc:string;
    public imageAlt:string;
    public id?:number;
    public movieGenre?:string;
    public desc?:string;
    public trailerlink?:string;
    public cast?:string[];
    public releaseDate?:string;
    public country?:string;
    public director?:string;
    public time?:string;
    public writer?:string;


    constructor(name:string,imgPath:string,id?:number,
        movieGenre?:string,desc?:string,
        trailerlink?:string,cast?:string[],
        releaseDate?:string,country?:string,director?:string,
        time?:string,writer?:string){
        this.imageSrc=name;
        this.imageAlt=imgPath;
        this.id=id;
        this.desc=desc;
        this.movieGenre=movieGenre;
        this.trailerlink=trailerlink;
        this.cast=cast;
        this.releaseDate=releaseDate;
        this.country=country;
        this.director=director;
        this.time=time;
        this.writer=writer;
    }

}