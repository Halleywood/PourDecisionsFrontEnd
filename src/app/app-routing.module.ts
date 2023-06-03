import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { LoginComponent } from "./login/login.component"
import { HomepageComponent } from "./homepage/homepage.component"
import { AuthGuard } from "./services/auth.guard"
import { ProfileComponent } from "./profile/profile.component"

const routes: Routes=[
    {path: 'home', component: HomepageComponent, canActivate: [AuthGuard]},
    {path: 'test', component: ProfileComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent}
]
@NgModule({
    imports:[RouterModule.forRoot(routes)], 
    exports:[RouterModule], 
    providers: [AuthGuard]
})
export class AppRoutingModule{}