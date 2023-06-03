import { Component } from '@angular/core';
import { JwtClientService} from '../services/jwt-client.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginRequest: any ={
    "email": "kelsey@ga.com", 
    "password": "kelsey"
  }

  response: any; 

  constructor(private jwtService: JwtClientService, private http: HttpClient){}

  public loginUser(){
    console.log("you clicked to login!")
    this.jwtService.login(this.loginRequest)
    console.log(this.loginRequest)
  }

  public test(){
    console.log("You clicked the test method button")
      this.http.get("http://localhost:8080/auth/test", {responseType: 'text' as 'json'}).subscribe(data => {
        console.log(data)
      this.response = data;
    })
    console.log(this.response)
  }


  ngOnInit(){
     
  }

}
