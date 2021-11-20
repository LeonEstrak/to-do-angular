import { Component, OnInit } from '@angular/core';
import { TodoDataService } from 'src/app/services/todo-data.service';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  studentArray: Student[];

  constructor(private toDoDataService: TodoDataService) {}

  ngOnInit(): void {
    this.toDoDataService.getTodoList().subscribe((resp: Student[]) => {
      this.studentArray = resp;
    });
  }
}
