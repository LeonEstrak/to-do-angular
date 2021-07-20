import { Component, Input, OnInit} from '@angular/core';
import { TodoDataService } from 'src/app/services/todo-data.service';
import { Todo } from '../../../models/todo.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  constructor(private todoDataService:TodoDataService) {}

  @Input() todo: Todo;
  className:string;
  ngOnInit(): void {
    this.className=this.todo.completed?"completed":"card";
  }

  onChange() {
    this.todoDataService.updateTodo(this.todo);

    this.className=this.todo.completed?"completed":"card";
  }

  onDelete() {
    this.todoDataService.deleteTodo(this.todo);
  }
}
