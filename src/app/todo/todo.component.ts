import { Component, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { Todo } from '../shared/todo.model';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations: [
    trigger('todoItemAnimation', [
      transition(':leave', [
        animate(300, style({
          opacity: 0,
          height: 0,
          marginBottom: 0
        }))
      ])
    ])
  ]
})
export class TodoComponent {

  todos: Todo[] = [];

  // @Output() editClick:EventEmitter<void> = new EventEmitter() ; 
  constructor(private _TodoService: TodoService, private _Router: Router, private _NotificationService: NotificationService) { }

  ngOnInit(): void {

    this.todos = this._TodoService.getTodos();

  }

  todoCheck(todo: Todo) {
    this._TodoService.updateTodo(todo.id, { completed: !todo.completed })
  }

  onEditClick(todo: Todo) {
    this._Router.navigate(['/todo', todo.id])

  }

  deleteClick(todo: Todo) {
    this._TodoService.deleteTodo(todo.id);
    this._NotificationService.show('Todo Deleted !');

  }

}
