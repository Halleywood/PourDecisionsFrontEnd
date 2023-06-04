import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs'
import {tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  responseData: any; 

  constructor(private http: HttpClient) { }

  registerUser(user: any): Observable<any>{
    return this.http.post<any>('http://localhost:8080/auth/register', user)
  }

}
