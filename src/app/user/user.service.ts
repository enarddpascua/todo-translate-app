import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserLog } from "../auth/user.model";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient){}

    // url = 'http://localhost:3000/api/v1/users';

    url ='https://radiant-beach-84745.herokuapp.com/api/v1/users';


    getAllUsers():Observable<UserLog[]>{
        return this.http.get<UserLog[]>(this.url, {withCredentials:true});
    }
}