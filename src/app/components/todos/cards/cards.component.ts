import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../../models/todo.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() todo: Todo;
  @Output() onToggle: EventEmitter<string> = new EventEmitter();

  onChange() {
    console.log('onChange Fired');
    this.onToggle.emit(this.todo.id);
  }
}
