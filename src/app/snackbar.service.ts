import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
    providedIn:'root'
})
export class SnackbarService {

    constructor(private snackBar: MatSnackBar){}

    notifyUser(message:string, action:string){
        this.snackBar.open(message, action,{
            duration: 3000,
            verticalPosition:'top'
          });
    }
}