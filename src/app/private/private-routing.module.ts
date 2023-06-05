import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { HomepageComponent } from './components/homepage/homepage.component';
import { AuthGuard } from '../services/auth.guard';
import { WineDetailsComponent } from './components/wine-details/wine-details.component';
import { WinesComponent } from './components/wines/wines.component';

const routes: Routes = [
    {path: 'home', component: HomepageComponent, canActivate: [AuthGuard]},
    {path: 'wines', component: WinesComponent, canActivate: [AuthGuard]},
    {path: 'community', component:HomepageComponent, canActivate: [AuthGuard]},
    {path: 'wines/:id', component: WineDetailsComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'home', pathMatch: "full"}
]


@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
