import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { JwtClientService } from './services/jwt-client.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { PrivateModule } from './private/private.module';
import { PublicModule } from './public/public.module';


@NgModule({
  declarations: [
    AppComponent
   
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    AppRoutingModule, 
    PrivateModule, 
    PublicModule

  ],
  providers: [JwtClientService, {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
