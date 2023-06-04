import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms'
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  
 form: FormGroup = new FormGroup({
  email: new FormControl(null, [Validators.required, Validators.email]), 
  password: new FormControl(null, [Validators.required, Validators.minLength(8)])
 })
  
  constructor(private service: UserService, private router: Router){}

  ngOnInit(){}

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get password(): FormControl{
    return this.form.get('password') as FormControl;
  }

  registerUser(){
    this.service.registerUser(this.form.value).subscribe( data=>{
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
