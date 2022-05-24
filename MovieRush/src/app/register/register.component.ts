import { Component, ViewChild, AfterViewInit, ElementRef} from '@angular/core';
import { NgForm } from '@angular/forms';
import {FlashMessagesService} from 'angular2-flash-messages';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
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
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router:Router
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
      const user={
        username:form.value.username,
        password:form.value.password
      }
      this.authService.authenticateUser(user).subscribe(data=>{
        if(data.body['success']){
          this.authService.signin.next(true);
          this.authService.storeUserData(data.body['token'],data.body['user']);
          this.flashMessage.show("Login Successful",{cssClass:'alert-danger',timeout:4000});
          this.router.navigate(['/home']);

        }else{
          this.flashMessage.show(data.body['msg'],{cssClass:'alert-danger',timeout:4000})
        }

      });

  }

  onRegisterSubmit(form:NgForm){
    const user={
      username:form.value.username,
      email:form.value.email,
      password:form.value.password
    }
    this.authService.registerUser(user).subscribe(data=>{

      if(data.body['success']){
        this.flashMessage.show('You are now registered and can login',{cssClass:'alert-success',timeout:3000});
        this.router.navigate(['/signin']);

      }else{
        this.flashMessage.show('Something went wrong',{cssClass:'alert-danger',timeout:3000});
        this.router.navigate(['/signin']);
      }
    })

  }

}
