import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { SecurityComponent } from './security.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    SecurityComponent
  ],
  imports: [
    CommonModule, 
    FormsModule
  ], 
  exports: [
    LoginComponent, 
    RegistrationComponent
  ]
})
export class SecurityModule { }
