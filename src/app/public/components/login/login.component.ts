import { Component, OnInit } from '@angular/core';
import { JwtClientService} from '../../../services/jwt-client.service';
import { Router } from '@angular/router';


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

  constructor(private jwtService: JwtClientService, private router: Router){}

  public loginUser(): void{
    console.log("you clicked to login!")
    this.jwtService.login(this.loginRequest)
    if(this.jwtService.isLoggedIn()){
      this.router.navigate(['/private/home']);
    }
  }

}
