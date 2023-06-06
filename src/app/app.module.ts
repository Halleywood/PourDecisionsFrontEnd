import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { JwtClientService } from './services/jwt-client.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { PrivateModule } from './private/private.module';
import { PublicModule } from './public/public.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { UserService } from './services/user.service';
import { WineDetailsComponent } from './private/components/wine-details/wine-details.component';
import { CommunityComponent } from './private/components/community/community.component';
import { PostCreateComponent } from './private/components/post-create/post-create.component';
import { PostDetailsComponent } from './private/components/post-details/post-details.component';


@NgModule({
  declarations: [
    AppComponent,
    WineDetailsComponent,
    CommunityComponent,
    PostCreateComponent,
    PostDetailsComponent
   
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    AppRoutingModule, 
    PrivateModule, 
    PublicModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [JwtClientService, UserService, {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
