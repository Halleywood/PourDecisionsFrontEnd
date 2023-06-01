import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{
  data: any;
  constructor(private http: HttpClient){}

  ngOnInit(){
      this.http.get("http://localhost:8080/auth/test", {responseType: 'text' as 'json'})
      .subscribe((response:any)=>{
        console.log(response)
        this.data = response;
      })
  }
}
