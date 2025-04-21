import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodosService {
  getUsers() {
    throw new Error('Method not implemented.');
  }
  http=inject(HttpClient);
  getTodosFromApi(){
    const url=`https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<Todo>>(url);
  }
}
