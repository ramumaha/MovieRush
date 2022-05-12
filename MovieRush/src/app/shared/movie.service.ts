import {Movie} from './movie.model';  
export class MovieService{
    
   private images:Movie[] = [
        {
         
          imageSrc:
          'https://goggler.my/wp-content/uploads/2019/12/JM2_INTL_30Sht_BRIDGE_03-e1575889045252.jpg',
          imageAlt: 'Jumanji',
           id:1,
           desc:"good movie",
           movieGenre:"action/adventure",
          trailerlink:'https://youtu.be/2QKg5SZ_35I',
          cast:["J","U","M","A","N","J","I"],
          
        },
        {
         
          imageSrc:
          'https://i.pinimg.com/originals/42/75/01/42750115d68a876558e7e0115b6600c8.jpg',
          imageAlt: 'tranquility of blood',
           id:2,
           desc:"good movie",
           movieGenre:"action/adventure",
          trailerlink:'https://www.youtube.com/embed/RKuQ52PEzhQ',
          cast:["T","R","A","N","Q","I","L","I","T","Y"]
        },
        {
         
          imageSrc:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3oDSiKS8_1wGsxS-cmj6IKu6L8LK5WlfGvg&usqp=CAU',
          imageAlt: 'inside out',
           id:3,
           desc:"good movie",
           movieGenre:"action/adventure",
          trailerlink:'https://youtu.be/yRUAzGQ3nSY',
          cast:["I","N","S","I","D","E"]
        },
        {
         
          imageSrc:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgudGb7qYL3AEFWVbEdBZ1aGSw7J-V_kqqYg&usqp=CAU',
          imageAlt: 'hunger games',
           id:4,
           desc:"good movie",
           movieGenre:"action/adventure",
          trailerlink:'https://youtu.be/mfmrPu43DF8',
          cast:["H","U","N","G","E","R"]
        },
      ]

      getMovies(){
          return this.images.slice();
          
      }

      getMovieById(id:number){
        return this.images[id];
      }
}