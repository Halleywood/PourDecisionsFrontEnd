import { Component, OnInit } from '@angular/core';
import { WineService } from 'src/app/services/wine.service';
import { Wine } from 'src/app/wine.model';

@Component({
  selector: 'app-wines',
  templateUrl: './wines.component.html',
  styleUrls: ['./wines.component.css']
})
export class WinesComponent implements OnInit {
  keyword: string ='';
  arrayOfWines: any[] = [];
  wines: Wine[] =[]; 
 

  allWines: any; 
  constructor(private wineService: WineService){}

  ngOnInit(){
    this.wineService.getAllWines().subscribe((wines: Wine[]) =>{
      this.wines = wines; 
  })
  }

  onSubmit(){
    if(this.keyword){
      console.log(this.keyword)
      this.arrayOfWines = this.wines.filter(w=>w.varietal.includes(this.keyword))
      console.log(this.arrayOfWines)
      this.keyword='';
    }
  }
}
