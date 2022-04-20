import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovieRush';
  active='home';
  changePage(message:string){
    this.active=message;
    console.log(message);
  }

  images = [
    {
      imageSrc:
        'https://i.pinimg.com/originals/3c/f4/cf/3cf4cf74674ede94488ee71d7ae04ade.jpg',
      imageAlt: 'tintin',
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

  
}
