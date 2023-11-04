import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


export class Todo {

  constructor(
    public id: bigint,
    public username: string,
    public description: string,
    public date: Date,
    public completed: boolean) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient: HttpClient) { }

  executeTodoListService(username: string): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(`http://localhost:8080/user/${username}/todos`)
  }

  deleteById(username: string, id: BigInt) {
    return this.httpClient.delete(`http://localhost:8080/user/${username}/todos/${id}`)
  }

  retrieveTodo(username: string, id: number) {
    return this.httpClient.get<Todo>(`http://localhost:8080/user/${username}/todo/${id}`)
  }

  updateTodo(username : string, id : number, todo : Todo | null) {
    return this.httpClient.put(`http://localhost:8080/user/${username}/todo/${id}`, todo)
  }

}
