import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/post.model';
import { WineService } from 'src/app/services/wine.service';
import { UserService } from 'src/app/services/user.service';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit{

  userId:any;
  
  post$: Observable<Post| null> = new Observable<Post | null>(); 
  constructor(private wineService: WineService, private userService: UserService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void{
    const postId = this.route.snapshot.paramMap.get('id') || this.route.snapshot.queryParamMap.get('id');
    if(postId){
      const parsedId = parseInt(postId)
      this.post$ = this.wineService.getPost(parsedId);
    }
    this.getCurrentUserId();
  }
  public getCurrentUserId(){
    const currentUser = this.userService.getCurrentUser()
    currentUser.subscribe(response=>{
      this.userId =response.id;
    })
  }

  public deletePost(id: string){
    const parseId = parseInt(id)
    this.wineService.deletePost(parseId).subscribe();
    console.log("DELETED IN POST-DETAILS COMPONENT")
  }
}
