import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface Todo {
    name:string,
    done:boolean,
    language: string
}

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    todos:Todo[]  = [];
    //dev url
    url = 'http://localhost:3000/api/v1/todos';

    constructor(private http: HttpClient){}

    getAllTodos(){
        this.http.get<Todo[]>(this.url).subscribe(response=>{
            console.log(response);
        })
    }

    addTodo(todoData:Todo){
        this.http.post<Todo>(this.url, todoData).subscribe(response => {
            console.log(response);
        });
        // console.log(JSON.stringify(todoData))
    }

    deleteTodo(id:number){
        this.http.delete<Todo>(`${this.url}/${id}`).subscribe(response => {
            console.log(response);
        });
    }
}