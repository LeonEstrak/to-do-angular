import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  private todoArray: Todo[];

  constructor(private http: HttpClient) {}

  private addToListUsingObservable:Function;
  private overWriteListUsingObservable:Function;

  private todoObservable:Observable<Todo[]> = new Observable<Todo[]>((observer:Observer<Todo[]>)=>{
    observer.next(this.todoArray);

    this.addToListUsingObservable = (todo:Todo)=>{
      this.todoArray.push(todo);
      observer.next(this.todoArray);
    }

    this.overWriteListUsingObservable = (todoList:Todo[]) => {
      this.todoArray = todoList;
      observer.next(this.todoArray);
    }

    return {unsubscribe(){}};
  });

  
  public getTodoList(): Observable<Object> {
    this.http.get('http://localhost:8080/todo').subscribe((resp:Todo[])=>{
      this.overWriteListUsingObservable(resp);
    })
    return this.todoObservable;
  }

  public addTodo(newTodo: Todo): void {
    this.http.post('http://localhost:8080/todo',newTodo).subscribe((resp)=>{
      this.addToListUsingObservable(newTodo);
      console.log(resp);
    });
  }

  public deleteTodo(delTodo:Todo) {
    this.todoArray = this.todoArray.filter((todo) => todo.id != delTodo.id);
    this.http.post('http://localhost:8080/deltodo',delTodo).subscribe((resp)=>{
      this.overWriteListUsingObservable(this.todoArray);
      console.log(resp);
    })
  }

  public updateTodo(toggleTodo:Todo){
    this.todoArray.forEach((todo:Todo)=>{
      if(todo.id==toggleTodo.id){
        todo.completed= !todo.completed;
      }});
    this.http.put('http://localhost:8080/todo',toggleTodo).subscribe((resp)=>{
      this.overWriteListUsingObservable(this.todoArray);
      console.log(resp);
    })
  }
}
