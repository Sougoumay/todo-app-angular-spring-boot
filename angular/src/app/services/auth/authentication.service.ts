import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username : string, password : string) : boolean {
    if (username==="hamid@net.com" && password === "sgma") {
      sessionStorage.setItem("AuthenticatedUser",username)
      return true;
    }

    return false;
  }

  isUserAuthenticated() {
    let user = sessionStorage.getItem("AuthenticatedUser")
    return user!==null
  }

  logout() {
    sessionStorage.removeItem("AuthenticatedUser")
  }
}
