import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { WineService } from 'src/app/services/wine.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import { Post } from 'src/app/post.model';
import {FormGroup, Validators, FormControl} from '@angular/forms'

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css']
})
export class PostUpdateComponent implements OnInit{

  updatePost$: Observable<Post| null> = new Observable<Post | null>(); 
  wineId: number | null =null;

  form: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]), 
    tastingNotes: new FormControl(null, [Validators.required]), 
    rating: new FormControl(null, [Validators.required]), 
    imgSrc: new FormControl(null, [Validators.required])
   })
  
    get title(): FormControl {
      return this.form.get('title') as FormControl;
    }
    get tastingNotes(): FormControl{
      return this.form.get('tastingNotes') as FormControl;
    }
    get rating(): FormControl{
      return this.form.get('rating') as FormControl;
    }
    get imgSrc(): FormControl{
      return this.form.get('imgSrc') as FormControl;
    }

  constructor(private wineService: WineService, private userservice: UserService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(){
    const postId = this.route.snapshot.paramMap.get('id')
    if(postId){
      const parsedId = parseInt(postId)
      this.updatePost$ = this.wineService.getPost(parsedId)
    }
    this.updatePost$.subscribe((post: Post | null)=>{
      if(post){
        this.form.patchValue({
          title: post.title, 
          tastingNotes: post.tastingNotes, 
          rating: post.rating, 
          imgSrc: post.imgSrc
        })
      }
    })
  }
  onSubmit(id: string){
      const parsedId = parseInt(id)
      this.wineService.updatePost(parsedId, this.form.value).subscribe(response=>{
        if(response){
          this.router.navigate(['/secure/wines/'+this.wineService.currentWineId])
        }
      });
    }
  }
