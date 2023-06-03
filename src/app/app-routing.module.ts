import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { AuthGuard } from "./services/auth.guard"
import { PrivateModule } from "./private/private.module"


const routes: Routes=[
    {path: 'private', loadChildren: ()=> import('./private/private.module').then(m=>m.PrivateModule)},
    {path: 'public', loadChildren: ()=> import('./public/public.module').then(m=>m.PublicModule)}, 
    {path: '**', redirectTo: 'public', pathMatch: "full"}
]
@NgModule({
    imports:[RouterModule.forRoot(routes)], 
    exports:[RouterModule], 
    providers: [AuthGuard]
})
export class AppRoutingModule{}