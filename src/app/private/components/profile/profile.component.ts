import { Component, OnInit} from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {Observable } from 'rxjs'
import { UserProfile } from 'src/app/userprofile.model';
import { WineService } from 'src/app/services/wine.service';
import { Post } from 'src/app/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{



   currentUser$: Observable<UserProfile | null> = new Observable<UserProfile | null>()

    constructor(private userService: UserService, private wineService: WineService, private router: Router){

    }
    //on init, gets the userprofile from logged in user and their posts. 
    ngOnInit(){
      this.currentUser$ =this.userService.getCurrentUser();
   
    }


    public logOutUser(){
      this.userService.logout();
      this.router.navigate(['/public/login'])
    }

}
