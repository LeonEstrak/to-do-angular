import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  todoArray: Todo[] = [
    {
      id: '1',
      message: 'message1',
      completed: false,
    },
    {
      id: '2',
      message: 'message2',
      completed: false,
    },
    {
      id: '3',
      message: 'message3',
      completed: false,
    },
  ];

  constructor() {}

  public get getTodoList(): Todo[] {
    return this.todoArray;
  }

  public addTodo(newTodo: Todo): void {
    this.todoArray.push(newTodo);
  }

  public deleteTodo(id: string) {
    this.todoArray = this.todoArray.filter((todo) => todo.id != id);
  }
}
