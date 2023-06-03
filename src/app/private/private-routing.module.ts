import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { HomepageComponent } from './components/homepage/homepage.component';
import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
    {path: 'home', component: HomepageComponent, canActivate: [AuthGuard]}, 
    {path: '*', redirectTo: 'home', pathMatch: "full"}
]


@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
