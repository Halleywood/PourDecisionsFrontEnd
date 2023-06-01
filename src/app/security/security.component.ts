import { Component, OnInit } from '@angular/core';
import { JwtClientService } from '../jwt-client.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent{

  loginRequest: any ={
    "email": "suresh@ga.com", 
    "password": "suresh"
  }

  response: any; 

  constructor(private jwtService: JwtClientService){}

  ngOnInit(){
   this.jwtService.welcome()
  }

}
