import {Movie} from './movie.model';  
export class MovieService{
    
   private images:Movie[] = [
        {
         
          imageSrc:
          'https://goggler.my/wp-content/uploads/2019/12/JM2_INTL_30Sht_BRIDGE_03-e1575889045252.jpg',
          imageAlt: 'Jumanji',
           id:1,
           desc:"Jumanji: The Next Level is a 2019 American fantasy adventure comedy film directed by Jake Kasdan and co-written by Jeff Pinkner, and Scott Rosenberg. It is a sequel to 2017's Jumanji: Welcome to the Jungle, the second follow-up to 1995's Jumanji, and is the fourth installment in the Jumanji franchise.",
           movieGenre:"action/adventure",
          trailerlink:'https://youtu.be/2QKg5SZ_35I',
          cast:["J","U","M","A","N","J","I"],
          releaseDate:'12 Dec 2019',
          country:"England",
          director:"Jake Kasdan Joe Johnston",
          time:"1 hr 30 mins",
          writer:"Grey Taylor Chris Van AllsBurg Jim Strain"
          
        },
        {
         
          imageSrc:
          'https://i.pinimg.com/originals/42/75/01/42750115d68a876558e7e0115b6600c8.jpg',
          imageAlt: 'tranquility of blood',
           id:2,
           desc:"Tranquillity of Blood is a film of the state of mind, great reflections and even greater decisions made in a little village shaped by the long-standing customs and tradition. The story follows the life of a husband and wife, Drago and Persa, who lost their son ten years ago.",
           movieGenre:"action/adventure",
          trailerlink:'https://www.youtube.com/embed/RKuQ52PEzhQ',
          cast:["T","R","A","N","Q","I","L","I","T","Y"],
          releaseDate:'12 Dec 2019',
          country:"England",
          director:"Jake Kasdan Joe Johnston",
          time:"1 hr 30 mins",
          writer:"Grey Taylor Chris Van AllsBurg Jim Strain"
        },
        {
         
          imageSrc:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3oDSiKS8_1wGsxS-cmj6IKu6L8LK5WlfGvg&usqp=CAU',
          imageAlt: 'inside out',
           id:3,
           desc:"Within the mind of a young girl named Riley are the basic emotions that control her actions: Joy, Sadness, Fear, Disgust, and Anger. Her experiences become memories, stored as colored orbs, which are sent into long-term memory each night. The aspects of five most important core memories within her personality incorporate the form of five floating islands. Joy acts as the leader, and she and the rest of the emotions try to limit Sadness's influence.",
           movieGenre:"animation/fantasy",
          trailerlink:'https://youtu.be/yRUAzGQ3nSY',
          cast:["I","N","S","I","D","E"],
          releaseDate:'12 Dec 2019',
          country:"England",
          director:"Jake Kasdan Joe Johnston",
          time:"1 hr 30 mins",
          writer:"Grey Taylor Chris Van AllsBurg Jim Strain"
        },
        {
         
          imageSrc:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgudGb7qYL3AEFWVbEdBZ1aGSw7J-V_kqqYg&usqp=CAU',
          imageAlt: 'hunger games',
           id:4,
           desc:"Katniss volunteers to replace her sister in a tournament that ends only when one participant remains. Pitted against contestants who have trained for this all their life, she has little to rely on.",
           movieGenre:"action/adventure",
          trailerlink:'https://youtu.be/mfmrPu43DF8',
          cast:["H","U","N","G","E","R"],
          releaseDate:'12 Dec 2019',
          country:"England",
          director:"Jake Kasdan Joe Johnston",
          time:"1 hr 30 mins",
          writer:"Grey Taylor Chris Van AllsBurg Jim Strain"
        },
      ]

      getMovies(){
          return this.images.slice();
          
      }

      getMovieById(id:number){
        return this.images[id];
      }
}