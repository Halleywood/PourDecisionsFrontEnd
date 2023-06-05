import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Wine } from '../wine.model';
import {Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class WineService {

  constructor(private http: HttpClient) { }

  public getAllWines(): Observable<Wine[]> {
    return this.http.get<Wine[]>('http://localhost:8080/api/wines')
  }

  public getAWine(id: number): Observable<Wine>{
    console.log(id)
    return this.http.get<Wine>(`http://localhost:8080/api/wine/${id}`)
  }
}
