import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {Observable } from 'rxjs'
import { UserProfile } from 'src/app/userprofile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

   currentUser$: Observable<UserProfile | null> = new Observable<UserProfile | null>()

    constructor(private userService: UserService){}
    ngOnInit(){
      this.currentUser$ = this.userService.getCurrentUser()
    }
}
