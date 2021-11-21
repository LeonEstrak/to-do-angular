import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/models/student.model';
import { TodoDataService } from 'src/app/services/todo-data.service';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css'],
})
export class UpdateDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<UpdateDialogComponent>,
    private todoService: TodoDataService,
    @Inject(MAT_DIALOG_DATA) public studentData: Student
  ) {}

  ngOnInit(): void {}

  rollno: string = this.studentData.rollno;
  name: string = this.studentData.name;
  age: number = this.studentData.age;

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
    newStudent.id = this.studentData.id;
    newStudent.rollno = this.rollno;
    newStudent.name = this.name;
    newStudent.age = this.age;

    this.todoService.updateTodo(newStudent);
    console.log(newStudent);
  }

  onDelete() {
    this.todoService.deleteTodo(this.studentData);
  }
}
