import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {


  constructor(private http: HttpClient) { }

  public welcome(){
    this.http.get("http://localhost:8080/auth/test", {responseType: 'text' as 'json'}).subscribe(response=>{
      console.log(response)
    })
  }
}
