import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TodoDataService } from 'src/app/services/todo-data.service';
import { Student } from '../../../models/student.model';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  constructor(
    private todoDataService: TodoDataService,
    private dialog: MatDialog
  ) {}

  @Input() student: Student;

  ngOnInit(): void {}

  onClick() {
    const dialogRef = this.dialog.open(UpdateDialogComponent, {
      data: this.student,
    });
  }
}
