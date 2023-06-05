import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { WinesComponent } from './components/wines/wines.component';

@NgModule({
  declarations: [
    HomepageComponent,
    ProfileComponent,
    NavmenuComponent,
    WinesComponent
  ],
  imports: [
    CommonModule, 
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
