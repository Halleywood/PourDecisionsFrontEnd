import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  authHeader = new HttpHeaders();

  constructor(private http: HttpClient) { }

  public login(requestBody: any){
    this.http.post("http://localhost:8080/auth/login", requestBody).subscribe((response)=>{
      console.log(response)
      const headers = new HttpHeaders().set("Authorization", "Bearer ")
    })
 
}
}