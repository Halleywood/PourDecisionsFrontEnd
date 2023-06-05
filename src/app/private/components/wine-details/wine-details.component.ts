import { Component, OnInit } from '@angular/core';
import { WineService } from 'src/app/services/wine.service';
import { Wine } from 'src/app/wine.model';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs'


@Component({
  selector: 'app-wine-details',
  templateUrl: './wine-details.component.html',
  styleUrls: ['./wine-details.component.css']
})
export class WineDetailsComponent implements OnInit{

  currentWine$: Observable<Wine | null> = new Observable<Wine | null>()
  wineId: any; 

  constructor(private wineService: WineService, private route: ActivatedRoute){}

  ngOnInit(): void{
      this.route.paramMap.subscribe( params => {
      let paramId: string = params.get('id') || '';
      this.wineId = parseInt(paramId)
    })
    this.currentWine$ = this.wineService.getAWine(this.wineId)
  }
}
