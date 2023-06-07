import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() postId:string | undefined;
  userId:any;
  posts: Post[] = [];

  
  post$: Observable<Post| null> = new Observable<Post | null>(); 
  constructor(private wineService: WineService, private userService: UserService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void{
    // const postId = this.route.snapshot.paramMap.get('id') || this.route.snapshot.queryParamMap.get('id');
    if(this.postId){
      const parsedId = parseInt(this.postId)
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
    const parsedId = parseInt(id)
    this.wineService.deletePost(parsedId).subscribe(()=>{
      const updatedPosts = this.posts.filter(post=>parseInt(post.id) !== parsedId);
      this.posts = updatedPosts; 
      console.log("POST SUCCESSFULLY DELETED! 💥")},
      (error)=>{
        console.log("ERROR DELETING POST! 🚩", error)
      })
      this.router.navigate(['/secure/wines'])
  }
}
