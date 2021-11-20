import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Student } from 'src/app/models/student.model';
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

  rollno: string = '';
  name: string = '';
  age: number = 18;

  updaterollno(event: any) {
    this.rollno = event.target.value;
  }

  updateName(event: any) {
    this.name = event.target.value;
  }

  updateage(event: any) {
    this.age = event.target.value;
  }

  onConfirm() {
    let newStudent = new Student();
    newStudent.rollno = this.rollno;
    newStudent.name = this.name;
    newStudent.age = this.age;

    this.todoService.addTodo(newStudent);
    console.log(newStudent);
  }
}
