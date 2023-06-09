import { Component, OnInit } from '@angular/core';
import { WineService } from 'src/app/services/wine.service';
import { Post } from 'src/app/post.model';
@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit{

  userPosts: Post[] = [];
  topPosts: Post[] = [];
  
  constructor(private wineService: WineService){}

  ngOnInit(){
    this.getAllPosts();
  }
      //Retrieves all posts written by the user. 
      public getAllPosts(){
        return this.wineService.getAllUsersPosts().subscribe((userPosts: Post[])=>{
          this.userPosts = userPosts;
          this.topPosts = this.userPosts.sort((a, b) => b.rating - a.rating); 
        }, (error) =>{
          console.log("Error fetching posts:", error)
        });
    }

    public deletePost(id: string){
      const parsedId = parseInt(id)
      this.wineService.deletePost(parsedId).subscribe(()=>{
        console.log("POST SUCCESSFULLY DELETED! 💥")},
        (error)=>{
          console.log("ERROR DELETING POST! 🚩", error)
        })
    }

}
