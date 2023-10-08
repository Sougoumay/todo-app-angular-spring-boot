import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../services/auth/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username = "hamid@net.com"
  password = "sgma"
  invalidCredential = false

  // Router : Angular.giveMeRouter ---- Depedency Injection
constructor(private router : Router, private auth : AuthenticationService) {}

  ngOnInit() {

  }


  helloLogin() {
    if (this.auth.authenticate(this.username,this.password)) {
      this.invalidCredential = false
      this.router.navigate(['welcome', this.username])
    } else {
      this.invalidCredential = true
    }
}

}
