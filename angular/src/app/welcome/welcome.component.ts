import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HelloWorldBean, WelomeDataService} from "../services/data/welome-data.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{
  message = "Some welcome message"
  name = ''
  welcomeFromBeanMessage : string = ''

  // ActivateRoute est utilisé pour les routes qui ont des paramètres

  constructor(private route : ActivatedRoute, private service : WelomeDataService) {}
  ngOnInit() {
    console.log(this.message)
    this.name = this.route.snapshot.params['name']

  }


  getWlecomeMessage() {
    // console.log(this.service.executeHelloWordBeanService())
    this.service.executeHelloWordBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error),
    )
  }

  getWlecomeMessageWithParameter() {
    // console.log(this.service.executeHelloWordBeanService())
    this.service.executeHelloWordBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error),
    )
  }

  handleSuccessfulResponse(response:HelloWorldBean) {
    this.welcomeFromBeanMessage = response.message
  }

  private handleErrorResponse(error: any) {
    this.welcomeFromBeanMessage = error.error.message
  }
}
