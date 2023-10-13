import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { Subscription, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todo: Todo[] = [];
  storageListenSub: Subscription;


  constructor() {
    this.getData();

    this.storageListenSub = fromEvent(window, 'storage')
      .subscribe((event: StorageEvent) => {
        if (event.key === 'todos') this.getData()
      })
  }

  getTodos() {
    return this.todo;
  }

  getTodo(id: string) {
    return this.todo.find((n) => {
      return n.id === id; // return true

    })
  }

  addTodo(todo: Todo) {
    this.todo.push(todo);
    this.saveData();
  }

  updateTodo(id: string, updatedFields: Partial<Todo>) {
    const todo = this.getTodo(id);
    Object.assign(todo as any, updatedFields);
    this.saveData();

  }

  deleteTodo(id: string) {
    const todoIndex = this.todo.findIndex(n => n.id === id)
    if (todoIndex == -1) return

    this.todo.splice(todoIndex, 1);
    this.saveData();

  }

  saveData() {
    localStorage.setItem('todos', JSON.stringify(this.todo));
  }

  getData() {
    const storageData = JSON.parse(localStorage.getItem('todos'));
    if(!storageData) return
    this.todo.length = 0;
    this.todo.push(...storageData)
 
  }




}
