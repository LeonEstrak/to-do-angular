import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from 'src/app/models/todo.model';
import { TodoDataService } from 'src/app/services/todo-data.service';
@Component({
  selector: 'add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css'],
})
export class AddDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent>,
    private todoService: TodoDataService
  ) {}

  message: string = '';
  updateMessage(event: any) {
    this.message = event.target.value;
  }
  onConfirm() {
    let newTodo = new Todo();
    newTodo.id = Date.now().toString();
    newTodo.completed = false;
    newTodo.message = this.message;

    this.todoService.addTodo(newTodo);
    console.log(newTodo);
  }
}
