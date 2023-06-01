import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule, HttpHeaders } from '@angular/common/http'
import { SecurityComponent } from './security/security.component';
import { AppRoutingModule } from './app-routing.module';
import { JwtClientService } from './jwt-client.service';
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent, 
    SecurityComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    AppRoutingModule 
  ],
  providers: [JwtClientService, TokenInterceptorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
