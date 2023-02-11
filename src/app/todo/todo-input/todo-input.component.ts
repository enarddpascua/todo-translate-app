import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent {

  constructor(private todoService: TodoService){}

  onAddTodo(todoData:{name:string}){
    this.todoService.addTodo({name: todoData.name, done: false, language:'en'});
  }
}
