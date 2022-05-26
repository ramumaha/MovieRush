import { Injectable } from "@angular/core";
@Injectable()
export class MovieService{    
   private images  = [
    {
     "imageAlt":"Tintin",
     "Poster":"https://m.media-amazon.com/images/M/MV5BNDE5MDExNTQ1OF5BMl5BanBnXkFtZTcwMDIxMTM5Ng@@._V1_SX300.jpg",
     "imdbID":"tt0983193"
      
    },
    { "imageAlt":"Inside Out",
      'Poster':"https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_SX300.jpg",
      "imdbID":"tt2096673"
    
    },
    { "imageAlt":"Tranquility",
      'Poster':"https://m.media-amazon.com/images/M/MV5BMTIzNzk1MjAxOV5BMl5BanBnXkFtZTcwMDc2NjAyMg@@._V1_SX300.jpg",
      "imdbID":"tt1337033"
     
    },
    { "imageAlt":"Hunger Games",
      'Poster':"https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_SX300.jpg",
      "imdbID":"tt1392170"
    }
  ]
      getMovies(){
          return this.images.slice();
          
      }
}