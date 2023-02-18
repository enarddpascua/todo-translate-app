import { Component, Input } from '@angular/core';
import { TodoService } from '../todo.service';
import { TodoWithId } from '../todo.model';
import { MatSelect } from '@angular/material/select';
import { TranslationService } from '../translation.service';
import { SnackbarService } from 'src/app/snackbar.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent{
   @Input() todoElement:TodoWithId | undefined;

  constructor(private todoService:TodoService, private translationService: TranslationService, private snackBar:SnackbarService){}
  
  deleteTodo(id:string | undefined){
    this.todoService.deleteTodo(id).subscribe(res=>{
      this.snackBar.notifyUser(res, 'Ok');
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
