import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule, 
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
