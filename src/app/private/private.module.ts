import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    HomepageComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule, 
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
