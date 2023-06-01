import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {


  constructor(private http: HttpClient) { }

  public generateToken(requestBody: any){
    return this.http.post("http://localhost:8080/auth/login", requestBody, {responseType: 'text' as 'json'});
  }

  public welcome(token){
    let tokenString = 'Bearer ' + token; 
    const headers = new HttpHeaders().set("Authorization", tokenString);
    return this.http.get("http://localhost:8080/auth/test", {headers, responseType: 'text' as 'json'});
  }
}
