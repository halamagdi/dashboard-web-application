import { Component } from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Todo } from '../shared/todo.model';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent {

  showError: boolean | any;

  constructor(private _TodoService: TodoService, private _Router: Router, private _NotificationService: NotificationService) { }

  ngOnInit(): void {

  }

  addTodoSubmit(form: NgForm) {
    const { text } = form.value;
    if (form.invalid) return this.showError = true
    const todo = new Todo(text);
    console.log(todo);
    this._TodoService.addTodo(todo);
    this._Router.navigateByUrl('/todo');
    this._NotificationService.show('Todo Added !');

  }

}
