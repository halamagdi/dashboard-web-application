import { Component } from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Todo } from '../shared/todo.model';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-edittodo',
  templateUrl: './edittodo.component.html',
  styleUrls: ['./edittodo.component.css']
})
export class EdittodoComponent {

  showError: boolean | any;
  todo: Todo;
  idParam: any;


  constructor(private _TodoService: TodoService, private _Router: Router, private _ActivatedRoute: ActivatedRoute, private _NotificationService: NotificationService) { }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.idParam = paramMap.get('id');
      this.todo = this._TodoService.getTodo(this.idParam);


    })

  }

  updateText(form: NgForm) {
    if (form.invalid) return this.showError = true
    this._TodoService.updateTodo(this.todo.id, form.value);
    this._Router.navigateByUrl('/todo');
    this._NotificationService.show('Todo Updated !');

  }



}
