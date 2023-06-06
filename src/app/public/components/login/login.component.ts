import { Component, OnInit } from '@angular/core';
import { JwtClientService} from '../../../services/jwt-client.service';
import { Router } from '@angular/router';
import {FormGroup, Validators, FormControl} from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   
  form: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]), 
    password: new FormControl(null, [Validators.required, Validators.minLength(8)])
   })
  
    get email(): FormControl {
      return this.form.get('email') as FormControl;
    }
    get password(): FormControl{
      return this.form.get('password') as FormControl;
    }
    
  constructor(private jwtService: JwtClientService, private router: Router){}

  public loginUser(): void{
    //by subscribing to it...it wont do the if check until the login method is finished. This is where it sets the token to storage and will return TRUE for "isloggedin()"
    this.jwtService.login(this.form.value).subscribe(()=>{
      if(this.jwtService.isLoggedIn()){
        this.router.navigate(['/private/home'])
      }
    })
  }

}
