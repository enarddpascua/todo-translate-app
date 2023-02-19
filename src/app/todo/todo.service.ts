import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Todo, TodoWithId } from "./todo.model"; 
import { tap } from "rxjs/operators";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    //dev url
    // url = 'http://localhost:3000/api/v1/todos';

    //prod url
    url='https://radiant-beach-84745.herokuapp.com/api/v1/todos';

    constructor(private http: HttpClient){}

    private refreshRequired = new Subject<void>();

    get RefreshRequired(){
        return this.refreshRequired;
    }

    getAllTodos():Observable<TodoWithId[]>{
        return this.http.get<TodoWithId[]>(this.url, {withCredentials:true});
    }

    addTodo(todoData:{uid:number,name:string,done:boolean,language:string}): Observable<string>{
       return this.http.post(this.url, todoData, {responseType:'text'}).pipe(
        tap(() => {
            this.RefreshRequired.next();
        })
       );
    }

    deleteTodo(id:string|undefined):Observable<string>{
        return this.http.delete(`${this.url}/${id}`, {responseType:'text', withCredentials:true}).pipe(
            tap(() => {
                this.RefreshRequired.next();
            })
        );
    }

    updateTodo(id:string|undefined,todo:Todo):Observable<string>{
        return this.http.put(`${this.url}/${id}`, todo ,{responseType:'text', withCredentials:true}).pipe(
            tap(() => {
                this.RefreshRequired.next();
            })
        );
    }
}