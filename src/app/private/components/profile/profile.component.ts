import { Component, OnInit} from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {Observable } from 'rxjs'
import { UserProfile } from 'src/app/userprofile.model';
import { WineService } from 'src/app/services/wine.service';
import { Post } from 'src/app/post.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{


  userPosts: Post[] = [];
   currentUser$: Observable<UserProfile | null> = new Observable<UserProfile | null>()

    constructor(private userService: UserService, private wineService: WineService){

    }
    //on init, gets the userprofile from logged in user and their posts. 
    ngOnInit(){
      this.currentUser$ =this.userService.getCurrentUser();
      this.getAllPosts();
    }

    //Retrieves all posts written by the user. 
    public getAllPosts(){
        return this.wineService.getAllUsersPosts().subscribe((userPosts: Post[])=>{
          this.userPosts = userPosts;
          console.log(this.userPosts)
        }, (error) =>{
          console.log("Error fetching posts:", error)
        });
    }

}
