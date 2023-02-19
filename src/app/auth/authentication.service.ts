import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {User} from './user.model';


@Injectable({
    providedIn: 'root'
})
export class AuthenticationService{
    // url = 'http://localhost:3000/api/v1/users';
    url ='https://radiant-beach-84745.herokuapp.com/api/v1/users';

    constructor(private http: HttpClient){}

    signup(reqBody:User):Observable<string>{
       return this.http.post(`${this.url}/signup`, reqBody, {responseType:'text',withCredentials:true}); 
    }

    login(reqBody:{email:string, password:string}):Observable<{id:number,message:string, user:string, sessionID:string, role:string}>{
        return this.http.post<{id:number,message:string, user:string, sessionID:string,role:string}>(`${this.url}/login`, reqBody,{withCredentials:true});
    }

    logout(){
        localStorage.removeItem('user');
       return this.http.post(`${this.url}/logout`,{}, { headers:{
        'Access-Control-Allow-Credentials':'http://localhost:3000/api/v1/todos'
    },withCredentials:true});
    }

    getUserInfo():{id:string, email:string, role:string}{
        let userInfo = localStorage.getItem('user');
        let role:string = '';
        let id:string ='';
        let email: string = '';
        if(typeof userInfo === 'string'){
            role = JSON.parse(userInfo).role;
            id = JSON.parse(userInfo).id;
            email = JSON.parse(userInfo).email;
        }
        return {role,id,email}
    }

    isAuthenticated() : Boolean {
        let userData = localStorage.getItem('user');
        if(userData){
          return true;
        }
        return false;
      }

}