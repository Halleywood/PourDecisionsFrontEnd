import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule } from '../app-routing';


@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [
    CommonModule, 
    AppRoutingModule
  ], 
  exports: [
    LoginComponent, 
    RegistrationComponent
  ]
})
export class SecurityModule { }
