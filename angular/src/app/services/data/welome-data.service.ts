import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export class HelloWorldBean {
  constructor(public message:string) {

  }

}

@Injectable({
  providedIn: 'root'
})
export class WelomeDataService {

  constructor(private httpClient:HttpClient) { }

  executeHelloWordBeanService() : Observable<HelloWorldBean> {
    return this.httpClient.get<HelloWorldBean>("http://localhost:8080/hello-world-bean");
  }

  executeHelloWordBeanServiceWithPathVariable(name:string) : Observable<HelloWorldBean> {
    return this.httpClient.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean-with-path-variable/${name}`);
  }

}
