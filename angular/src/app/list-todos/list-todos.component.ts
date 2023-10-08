import { Component } from '@angular/core';


export class Todo {
  constructor(public id : number, public description : string, public targetDate : Date, public done : boolean) { }
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent {

  todos = [
    // {
    //   id : 1,
    //   description : "Description 1"
    // },
    // {
    //   id : 2,
    //   description : "Description 2"
    // },
    // {
    //   id : 3,
    //   description : "Description 3"
    // },
    // {
    //   id : 4,
    //   description : "Description 4"
    // },
    new Todo(1,"description 1", new Date(), false ),
    new Todo(2,"description 2", new Date(), false ),
    new Todo(3,"description 3", new Date(), true ),
    new Todo(4,"description 4", new Date(), true ),
    new Todo(5,"description 5", new Date(), false ),
    new Todo(6,"description 6", new Date(), true ),
  ]

}
