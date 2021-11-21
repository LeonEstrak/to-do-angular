import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  private studentArray: Student[];
  private serverEndPoint: string = 'http://localhost:8080/student';
  constructor(private http: HttpClient) {}

  private addToListUsingObservable: Function;
  private overWriteListUsingObservable: Function;

  private todoObservable: Observable<Student[]> = new Observable<Student[]>(
    (observer: Observer<Student[]>) => {
      observer.next(this.studentArray);

      this.addToListUsingObservable = (student: Student) => {
        this.studentArray.push(student);
        observer.next(this.studentArray);
      };

      this.overWriteListUsingObservable = (studentList: Student[]) => {
        this.studentArray = studentList;
        observer.next(this.studentArray);
      };

      return { unsubscribe() {} };
    }
  );

  public getTodoList(): Observable<Object> {
    this.http.get(this.serverEndPoint).subscribe((resp: Student[]) => {
      this.overWriteListUsingObservable(resp);
    });
    return this.todoObservable;
  }

  public addTodo(newStudent: Student): void {
    this.http.post(this.serverEndPoint, newStudent).subscribe((resp) => {
      this.addToListUsingObservable(newStudent);
      console.log(resp);
    });
  }

  public deleteTodo(delStudent: Student) {
    this.studentArray = this.studentArray.filter(
      (student: Student) => student.id != delStudent.id
    );
    this.http
      .delete(this.serverEndPoint, { body: delStudent })
      .subscribe((resp) => {
        this.overWriteListUsingObservable(this.studentArray);
        console.log(resp);
      });
  }

  public updateTodo(updatedStudent: Student) {
    this.studentArray.forEach((student: Student) => {
      if (student.id == updatedStudent.id) {
        student.rollno = updatedStudent.rollno;
        student.name = updatedStudent.name;
        student.age = updatedStudent.age;
      }
    });
    this.http.put(this.serverEndPoint, updatedStudent).subscribe((resp) => {
      this.overWriteListUsingObservable(this.studentArray);
      console.log(resp);
    });
  }
}
