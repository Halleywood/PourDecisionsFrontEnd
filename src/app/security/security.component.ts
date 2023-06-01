import { Component, OnInit } from '@angular/core';
import { JwtClientService } from '../jwt-client.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent{

  loginRequest: any ={
    "email": "", 
    "password": ""
  }

  response: any; 

  constructor(private jwtService: JwtClientService, private http: HttpClient){}

  public loginUser(){
    this.jwtService.login(this.loginRequest)
  }

  public test(){
    this.response = this.http.get("http://localhost:8080/auth/test")
    console.log(this.response)
  }


  ngOnInit(){
     
  }

}
