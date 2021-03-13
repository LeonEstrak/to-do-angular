import { Component, OnInit } from '@angular/core';
import { TodoDataService } from 'src/app/services/todo-data.service';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todoArray: Todo[];

  constructor(private toDoDataService: TodoDataService) {}

  ngOnInit(): void {
    this.todoArray = this.toDoDataService.getTodoList;
  }

  changeCompleted(id: string): void {
    console.log('changeCompleted Fired');
    this.todoArray.forEach((todo: Todo) => {
      if (todo.id == id) {
        todo.completed = !todo.completed;
        console.log(todo);
      }
    });
  }
}
