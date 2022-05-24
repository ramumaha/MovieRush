import { Component, OnInit } from '@angular/core';
import { AuthService } from '../register/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any;

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.authService.getProfile().subscribe(user=>{
      this.user=user;
      },
    err=>{
      console.log(err);
      return false;
    })
  }

}
