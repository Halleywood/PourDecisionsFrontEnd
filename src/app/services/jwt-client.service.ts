import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators'
import { Router } from '@angular/router';
import { UserProfile } from '../userprofile.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService{

  constructor(private http: HttpClient, private router: Router, private userService: UserService) { }

  token: string = ''; 
  header: HttpHeaders = new HttpHeaders();
  testData: any;

  
  registerUser(user: any): Observable<any>{
    return this.http.post<any>('http://localhost:8080/auth/register', user)
  }

  //returns an observable so other method can subscribe to it. 
  public login(requestBody: any): Observable<any>{
    return this.http.post("http://localhost:8080/auth/login", requestBody, {responseType: 'text' as 'json'})
    //pipe = streaming for response, map transforms response. 
    .pipe( map (response =>{
      return this.validParseResponse(response)
    }))
  }

  public isLoggedIn(): any {
    if(sessionStorage.getItem('token')?.length){
      return true;
    }
   else{
    return false;
   }
  }

  public getToken(): any{
    return sessionStorage.getItem('token');
  }

  private validParseResponse(response: any): boolean{
    const parsedResponse = JSON.parse(response)
    const jwtString = parsedResponse.message; 
    console.log("THIS IS THE JWTSTRING", jwtString)
    if(jwtString.includes(" ")){
      return false; 
    }
    else{
      this.token = jwtString;
      sessionStorage.setItem('token', this.token)
      console.log("set token!"+ this.token)
      return true;
    }
  }
}
