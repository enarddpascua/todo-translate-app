import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {User} from './user.model';


@Injectable({
    providedIn: 'root'
})
export class AuthenticationService{
    url = 'http://localhost:3000/api/v1/users';

    constructor(private http: HttpClient){}

    signup(reqBody:User):Observable<string>{
       return this.http.post(`${this.url}/signup`, reqBody, {responseType:'text'}); 
    }

    login(reqBody:{email:string, password:string}):Observable<{id:number,message:string, user:string, sessionID:string}>{
        return this.http.post<{id:number,message:string, user:string, sessionID:string}>(`${this.url}/login`, reqBody,{ headers:{
            'Access-Control-Allow-Credentials':'http://localhost:3000/api/v1/todos'
        },withCredentials:true});
    }

    logout(){
        localStorage.removeItem('user');
       return this.http.post<{message:string}>(`${this.url}/logout`,{});
    }

    isLoggedIn(): boolean{
        return localStorage.getItem('user') ? true : false;
    }

    isAuthenticated() : Boolean {
        let userData = localStorage.getItem('user')
        if(userData){
          return true;
        }
        return false;
      }

}