import { Component, OnInit} from '@angular/core';
import { WineService } from 'src/app/services/wine.service';
import { Wine } from 'src/app/wine.model';
import { ActivatedRoute, Router } from '@angular/router';
import {Observable} from 'rxjs'
import { Post } from 'src/app/post.model';

@Component({
  selector: 'app-wine-details',
  templateUrl: './wine-details.component.html',
  styleUrls: ['./wine-details.component.css']
})
export class WineDetailsComponent implements OnInit{

  wineId: any; 
  posts: Post[] = [];
  currentWine$: Observable<Wine | null> = new Observable<Wine | null>()

  constructor(public wineService: WineService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void{
      console.log('WineDetailsComponent initialized');
      this.route.paramMap.subscribe( params => {
      let paramId: string = params.get('id') || '';
      this.wineId = parseInt(paramId)
    })
    this.currentWine$ = this.wineService.getAWine(this.wineId)
  
    this.wineService.getPostsForWine(this.wineId).subscribe((posts: Post[])=>{
      this.posts = posts;
    })

  }

  createAPost(): void {
    this.router.navigate(['secure/post']);
  }

}
