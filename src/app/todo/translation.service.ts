import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { TranslationRequestBody,TranslationResponseBody } from "./translation.model";

@Injectable({
    providedIn: 'root'
})
export class TranslationService{
    url = 'https://translation.googleapis.com/language/translate/v2?';
    apiKey = 'key=AIzaSyDYPFynlqZXS-83gsSe8Wu9H7NY8p2KmoI';

    constructor(private http: HttpClient){}

    translateTodo(reqBody:TranslationRequestBody):Observable<TranslationResponseBody|any>{
        return this.http.post(`${this.url}${this.apiKey}`,reqBody);
    }
}