import { Injectable } from '@angular/core';
import { HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { JwtClientService } from './jwt-client.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private jwt: JwtClientService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("FROM THIS INTERCEPTOR")
    request = request.clone({
      setHeaders:{
        Authorization: "Bearer " + this.jwt.getToken()
      }
    });
    console.log(request)
    return next.handle(request);
  }
}
