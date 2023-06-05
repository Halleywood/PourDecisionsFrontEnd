import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators'
import { Router } from '@angular/router';
import { UserProfile } from '../userprofile.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getCurrentUser(){
    return this.http.get<UserProfile>('http://localhost:8080/api/get-user')
  }

}
