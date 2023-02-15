import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo, TodoWithId } from '../todo.model';
import { NgForm } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { TranslationService } from '../translation.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent{
   @Input() todoElement:TodoWithId | undefined;

  constructor(private todoService:TodoService, private translationService: TranslationService){}
  
  deleteTodo(id:string | undefined){
    this.todoService.deleteTodo(id).subscribe(res=>{
      console.log(res);
    });
  }

  translateTodo(lang:MatSelect, todo:TodoWithId|undefined){
    const translateReqBody = {
      q: todo?.name,
      source: todo?.language,
      target: lang.value,
      format: "text"
    }
    this.translationService.translateTodo(translateReqBody).subscribe(translatedData => {
      const updateReqBody={
        name:translatedData.data.translations[0].translatedText,
        done:todo?.done,
        language:lang.value
      }
      this.todoService.updateTodo(todo?.id, updateReqBody).subscribe(result => {
        console.log(result);
      })
    });

  }
}
