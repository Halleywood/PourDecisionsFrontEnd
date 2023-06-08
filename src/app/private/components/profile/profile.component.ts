import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {Observable } from 'rxjs'
import { UserProfile } from 'src/app/userprofile.model';
import { WineService } from 'src/app/services/wine.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

   currentUser$: Observable<UserProfile | null> = new Observable<UserProfile | null>()

    constructor(private userService: UserService, private wineService: WineService){}
    ngOnInit(){
      this.currentUser$ =this.userService.getCurrentUser();
   
      this.getAllPosts();
    }

    public getAllPosts(){
        this.wineService.getAllUsersPosts(2).subscribe((response)=>{
          console.log(response)
        })
    }

//can you get all posts for every user? 
//can you get every user?? 
}
