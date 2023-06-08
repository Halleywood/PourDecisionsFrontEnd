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
import { CommunityComponent } from './private/components/community/community.component';
import { PostCreateComponent } from './private/components/post-create/post-create.component';
import { WineDetailsComponent } from './private/components/wine-details/wine-details.component';
import { PostDetailsComponent } from './private/components/post-details/post-details.component';
import { WineService } from './services/wine.service';
import { WelcomeComponent } from './private/components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    CommunityComponent,
    PostCreateComponent, WineDetailsComponent, PostDetailsComponent, WelcomeComponent
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
  providers: [JwtClientService, UserService, WineService, {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
