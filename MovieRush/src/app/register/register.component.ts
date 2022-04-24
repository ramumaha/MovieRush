import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   sign_in_btn = document.querySelector("#sign-in-btn");
 sign_up_btn = document.querySelector("#sign-up-btn");
 container = document.querySelector(".container");

  constructor() { }

  ngOnInit(): void {
  }

  removeClass(){
    this.container.classList.remove("sign-up-mode");
  }
  addClass(){
    this.container.classList.add("sign-up-mode");


  }


}
