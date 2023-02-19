import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SnackbarService } from 'src/app/snackbar.service';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent {

  constructor(private todoService: TodoService, private snackBar: SnackbarService){}

  onAddTodo(todoForm:NgForm){
    const userInfo = localStorage.getItem('user');
    if(typeof userInfo === 'string'){
        let {id} = JSON.parse(userInfo);
      this.todoService.addTodo({uid:id, name: todoForm.value.name, done: false, language:'en'}).subscribe(res => {
        this.snackBar.notifyUser(res, 'Ok');
      });
      todoForm.reset();
      todoForm.untouched;
    }
  }
}
