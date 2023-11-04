import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo, TodoDataService } from 'src/app/services/todo/todo-data.service';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {

  todo: Todo | null = null
  id: number = 0

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    console.log(this.id)
    this.todoService.retrieveTodo('hamid', this.id).subscribe(
      response => {
        this.todo = response
        console.log(response.date);

      },
      error => {
        console.log(error.error.message)
      }
    )
  }

    updateTodo() {
        this.todoService.updateTodo("Hamidd", this.id, this.todo)
            .subscribe(
                response => {
                  console.log(response)
                }
            )
    }
}
