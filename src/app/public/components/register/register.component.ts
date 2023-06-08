import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms'
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { JwtClientService } from 'src/app/services/jwt-client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  
 form: FormGroup = new FormGroup({
  email: new FormControl(null, [Validators.required, Validators.email]), 
  password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
  // userName: new FormControl(null, [Validators.required]),
  // tagLine: new FormControl(null, [Validators.required]),
  // imgSrc: new FormControl(null, [Validators.required])
 })
  
  constructor(private service: UserService, private jwtService: JwtClientService, private router: Router){}

  ngOnInit(){}

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get password(): FormControl{
    return this.form.get('password') as FormControl;
  }
  // get userName(): FormControl {
  //   return this.form.get('userName') as FormControl;
  // }
  // get imgSrc(): FormControl {
  //   return this.form.get('imgSrc') as FormControl;
  // }
  // get tagLine(): FormControl {
  //   return this.form.get('tagLine') as FormControl;
  // }

  registerUser(){
    this.jwtService.registerUser(this.form.value).subscribe( data=>{
      console.log(data)
      if(data){
        this.router.navigate(['/public/login'])
      }
      else{
        console.log(data.error)
      }
    }
    )}

  


 
}
