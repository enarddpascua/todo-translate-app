import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent {

  constructor(private todoService: TodoService){}

  onAddTodo(todoForm:NgForm){
    let uid = sessionStorage.getItem('x');
    this.todoService.addTodo({name: todoForm.value.name, done: false, language:'en'}).subscribe(res => {
      console.log(res);
    });
    todoForm.reset();
    todoForm.untouched;
  }
}
