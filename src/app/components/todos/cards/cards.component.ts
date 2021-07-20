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

  ngOnInit(): void {}
  @Input() todo: Todo;

  onChange() {
    this.todoDataService.updateTodo(this.todo);
  }

  onDelete() {
    this.todoDataService.deleteTodo(this.todo);
  }
}
