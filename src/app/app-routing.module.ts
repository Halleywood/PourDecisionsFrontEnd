import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { AuthGuard } from "./services/auth.guard"


const routes: Routes=[
    {path: 'secure', loadChildren: ()=> import('./private/private.module').then(m=>m.PrivateModule), canActivate: [AuthGuard]},
    {path: 'public', loadChildren: ()=> import('./public/public.module').then(m=>m.PublicModule)}, 
    {path: '**', redirectTo: 'public', pathMatch: "full"}
]
@NgModule({
    imports:[RouterModule.forRoot(routes)], 
    exports:[RouterModule], 
    providers: [AuthGuard]
})
export class AppRoutingModule{}