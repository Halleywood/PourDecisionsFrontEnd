import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { WinesComponent } from './components/wines/wines.component';
import { PostUpdateComponent } from './components/post-update/post-update.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    HomepageComponent,
    ProfileComponent,
    NavmenuComponent,
    WinesComponent,
    PostUpdateComponent
  ],
  imports: [
    CommonModule, 
    PrivateRoutingModule, 
    FormsModule, 
    ReactiveFormsModule

  ]
})
export class PrivateModule { }
