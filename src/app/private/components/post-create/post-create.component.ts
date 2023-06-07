import { Component } from '@angular/core';
import {FormGroup, Validators, FormControl} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { WineService } from 'src/app/services/wine.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

  wineId: number | null = null;

  postForm: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]), 
    rating: new FormControl(null, [Validators.required]),
    tastingNotes: new FormControl(null, [Validators.required]),
    imgSrc: new FormControl(null)
  })

  get title(): FormControl{
    return this.postForm.get('title') as FormControl;
  }
  get rating(): FormControl{
    return this.postForm.get('rating') as FormControl;
  }
  get tastingNotes(): FormControl{
    return this.postForm.get('tasingNotes') as FormControl;
  }
  get imgSrc(): FormControl{
    return this.postForm.get('imgSrc') as FormControl;
  }

  constructor(private wineService: WineService, private userService: UserService, private route: ActivatedRoute, private router: Router){
  }

  public createPost(): void{
    this.wineId = this.wineService.currentWineId
    if(this.wineId){
      this.wineService.createPost(this.wineId, this.postForm.value).subscribe(
        (response)=>{
          console.log("post created successfully", response);
          this.router.navigate(['/secure/wines/', this.wineId])
        }, 
        (error)=>{
          console.error("ERROR CREATING POST!", error)
        }
      )
    }

    }
}

