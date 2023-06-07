import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Wine } from '../wine.model';
import { Post } from '../post.model';
import {Observable, of } from 'rxjs'
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WineService {
  currentWineId: number | null = null;
  data: any;

  setCurrentWineId(id: number): void{
    this.currentWineId = id;
  }
  resetCurrentWineId(): void{
    this.currentWineId = null;
  }

  constructor(private http: HttpClient) { }

  public getAllWines(): Observable<Wine[]> {
    return this.http.get<Wine[]>('http://localhost:8080/api/wines')
  
  }

  public getAWine(id: number): Observable<Wine>{
    const wine = this.http.get<Wine>(`http://localhost:8080/api/wine/${id}`)
    wine.subscribe(w=>{
      const wineId = parseInt(w.id)
      this.setCurrentWineId(wineId)
    })
    return wine; 
  }

  public getPostsForWine(id: number): Observable<Post[]>{
    return this.http.get<Post[]>(`http://localhost:8080/api/wineposts/${id}`).pipe(
      catchError((error)=>{
        console.log(error("UNABLE TO FETCH POSTS FOR WINE", error));
        return of([])
      })
    )
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

  public updatePost(id: number, post: Post){
    console.log("UPDATE METHOD")
    return this.http.put(`http://localhost:8080/api/posts/${id}`, post)
  }
}
