import { Component, OnInit } from '@angular/core';
import { JwtClientService } from '../jwt-client.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent{

  loginRequest: any ={
    "email": "email@email.com", 
    "password": "password"
  }

  response: any; 

  constructor(private jwtService: JwtClientService){}

  public loginUser(){
    this.jwtService.login(this.loginRequest)
    console.log("****")
  }

}
