import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { TranslationRequestBody,TranslationResponseBody } from "./translation.model";

@Injectable({
    providedIn: 'root'
})
export class TranslationService{
    url = 'https://translation.googleapis.com/language/translate/v2?key=';
    apiKey = '';

    constructor(private http: HttpClient){}

    translateTodo(reqBody:TranslationRequestBody):Observable<TranslationResponseBody|any>{
        return this.http.post(`${this.url}${this.apiKey}`,reqBody);
    }

    getLanguages():Observable<any>{
        return this.http.get(`${this.url}${this.apiKey}`);
    }
}