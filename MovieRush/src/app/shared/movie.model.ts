export class Movie{
    public imageSrc:string;
    public imageAlt:string;
    public movieGenre?:string;
    public desc?:string;

    constructor(name:string,imgPath:string,movieGenre?:string,desc?:string){
        this.imageSrc=name;
        this.desc=desc;
        this.imageAlt=imgPath;
        this.movieGenre=movieGenre;
    }

}