import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../services/auth/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{

  constructor(private authentication : AuthenticationService,
              private route : Router) {
  }


  ngOnInit() {
    this.authentication.logout()
    this.route.navigate(["login"])
  }

}
