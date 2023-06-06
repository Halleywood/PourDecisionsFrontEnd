import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Wine } from '../wine.model';
import { Post } from '../post.model';
import {Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class WineService {
  currentWineForPost: string='';

  constructor(private http: HttpClient) { }

  public getAllWines(): Observable<Wine[]> {
    return this.http.get<Wine[]>('http://localhost:8080/api/wines')
  }

  public getAWine(id: number): Observable<Wine>{
    return this.http.get<Wine>(`http://localhost:8080/api/wine/${id}`)
  }

  public getPostsForWine(id: number): Observable<Post[]>{
    return this.http.get<Post[]>(`http://localhost:8080/api/wineposts/${id}`)
  }

  public createPost(wineId: number, post: Post): Observable<any>{
    return this.http.post(`http://localhost:8080/api/posts/${wineId}`, post)
  }

  public getPost(id: number): Observable<Post>{
    return this.http.get<Post>(`http://localhost:8080/api/posts/${id}`)
  }
  public deletePost(id: number){
    console.log("MADE IT TO THE WINE SERVICE DELETE METHOD")
    return this.http.delete(`http://localhost:8080/api/posts/${id}`)
  }
}
