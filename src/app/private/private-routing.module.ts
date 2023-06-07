import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { HomepageComponent } from './components/homepage/homepage.component';
import { AuthGuard } from '../services/auth.guard';
import { WineDetailsComponent } from './components/wine-details/wine-details.component';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { Wine } from '../wine.model';
import { WinesComponent } from './components/wines/wines.component';
import { PostUpdateComponent } from './components/post-update/post-update.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';

const routes: Routes = [
    {path: '', component: HomepageComponent, canActivate: [AuthGuard], 
      children:[
        {path: 'wines', component: WinesComponent, canActivate: [AuthGuard]}, 
        {path: 'wines/:id', component: WineDetailsComponent, canActivate: [AuthGuard]},
        {path: 'post', component: PostCreateComponent, canActivate:[AuthGuard]}, 
        {path:'post-details/:id', component:PostDetailsComponent, canActivate:[AuthGuard]},
        {path: 'update/:id', component: PostUpdateComponent, canActivate:[AuthGuard]}
  
      ]},
    {path: '**', redirectTo: '', pathMatch: "full"}
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
