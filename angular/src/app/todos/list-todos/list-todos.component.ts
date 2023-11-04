import { Component, OnInit } from '@angular/core';
import { Todo, TodoDataService } from "../../services/todo/todo-data.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos: Todo[] = []
  message: string = ''
  constructor(
    private todoService: TodoDataService,
    private router: Router) {
  }

  ngOnInit() {
    this.getAllTodos()
  }

  getAllTodos() {
    this.todoService.executeTodoListService("hamid").subscribe(
      response => {
        console.log(response)
        this.todos = response
      }
    )
  }

  deleteById(id: BigInt) {
    this.todoService.deleteById("hamid", id).subscribe(
      response => {
        console.log(response)
        this.message = `Todo ${id} deleted successfully`
        this.getAllTodos()
      }
    )
  }

  updateById(id: BigInt) {
    this.router.navigate(['update/todo', id])
  }

}
