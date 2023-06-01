import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HomepageComponent } from "./homepage/homepage.component"
import { RegistrationComponent } from "./security/registration/registration.component"
import { LoginComponent } from "./security/login/login.component"

const routes: Routes=[
    {path: '', component: HomepageComponent},
    {path:'register',component: RegistrationComponent}, 
    {path:'login', component: LoginComponent}
]
@NgModule({
    imports:[RouterModule.forRoot(routes)], 
    exports:[RouterModule]
})
export class AppRoutingModule{}