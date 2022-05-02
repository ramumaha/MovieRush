import { Component} from '@angular/core';

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
}
