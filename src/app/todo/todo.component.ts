import { Component, OnInit } from '@angular/core';
import { TodoWithId } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
  loadedTodos:TodoWithId[] =[];
  constructor(private todoService: TodoService){}

  ngOnInit(): void {
    this.getAllTodos();
    this.todoService.RefreshRequired.subscribe(response=>{
      this.getAllTodos();
    })
  }

  getAllTodos(){
    this.todoService.getAllTodos().subscribe(todo => {
      this.loadedTodos = todo;
    });
  }

}
