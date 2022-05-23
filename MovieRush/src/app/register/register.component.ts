import { Component, ViewChild, AfterViewInit, ElementRef} from '@angular/core';
import { NgForm } from '@angular/forms';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements AfterViewInit {
  @ViewChild('loginf') loginEl: ElementRef;
  @ViewChild('registerf') registerEl: ElementRef;
  @ViewChild('buttonf') buttonEl: ElementRef;
  loginForm:HTMLFormElement;
  registerForm:HTMLFormElement;
  buttonDiv:HTMLDivElement;



  

  
  
  constructor(
    private flashMessage:FlashMessagesService
  ) { }
  ngAfterViewInit(): void {
    this.loginForm=this.loginEl.nativeElement;
    this.registerForm=this.registerEl.nativeElement;
    this.buttonDiv=this.buttonEl.nativeElement;
   
  
  }

  login(){
    this.loginForm.style.left="40px"
    this.registerForm.style.left="450px";
    this.buttonDiv.style.left="0";



  }

  register(){
    this.loginForm.style.left="-400px";
   this.registerForm.style.left="40px";
   this.buttonDiv.style.left="100px";
  }

  onLogin(form:NgForm){
    console.log(form);

  }

  onRegisterSubmit(form:NgForm){
    const user={
      name:form.value.username,
      email:form.value.email,
      password:form.value.password
    }
   

  }

}
