import { HttpClient, HttpHandler, HttpEvent, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class JwtClientService{

  constructor(private http: HttpClient) { }

  token: string = ''; 
  header: HttpHeaders = new HttpHeaders();

  public login(requestBody: any){
    this.http.post("http://localhost:8080/auth/login", requestBody, {responseType: 'text' as 'json'})
    .subscribe(response =>{
      this.token = this.extractJwtToken(response);
      sessionStorage.setItem('token', this.token)
      console.log("TOKEN IS: "+ this.token)
    })
  }
  public isLoggedIn(): any {
    return !!sessionStorage.getItem('token');
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
  }

