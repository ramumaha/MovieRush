import {Movie} from './movie.model';  
export class MovieService{
    
   private images:Movie[] = [
        {
          imageSrc:
          'https://goggler.my/wp-content/uploads/2019/12/JM2_INTL_30Sht_BRIDGE_03-e1575889045252.jpg',
          imageAlt: 'Jumanji',
        },
        {
          imageSrc:
          'https://i.pinimg.com/originals/42/75/01/42750115d68a876558e7e0115b6600c8.jpg',
          imageAlt: 'tranquility of blood',
        },
        {
          imageSrc:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3oDSiKS8_1wGsxS-cmj6IKu6L8LK5WlfGvg&usqp=CAU',
          imageAlt: 'inside out',
        },
        {
          imageSrc:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgudGb7qYL3AEFWVbEdBZ1aGSw7J-V_kqqYg&usqp=CAU',
          imageAlt: 'hunger games',
        },
      ]

      getMovies(){
          return this.images.slice();
          
      }

      getMoviesByname(imagAlt:string){
        return this.images[imagAlt];
      }
}