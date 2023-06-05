import { HttpClient, HttpHandler, HttpEvent, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class JwtClientService{

  constructor(private http: HttpClient, private router: Router) { }

  token: string = ''; 
  header: HttpHeaders = new HttpHeaders();

  public login(requestBody: any): Observable<any>{
    return this.http.post("http://localhost:8080/auth/login", requestBody, {responseType: 'text' as 'json'})
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

  private extractJwtToken(response: any): any {
    const jwtRegex = /"message":\s*"([^"]+)"/;
    const matches = jwtRegex.exec(response);
    if (matches && matches.length > 1) {
      return matches[1];
    }
    return null;
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
