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

    login(reqBody:{email:string, password:string}):Observable<{message:string, userId:string}>{
        return this.http.post<{message:string, userId:string}>(`${this.url}/login`, reqBody);
    }

    logout(){
        sessionStorage.removeItem('x');
    }

    isLoggedIn(): boolean{
        return sessionStorage.getItem('x') ? true : false;
    }
}