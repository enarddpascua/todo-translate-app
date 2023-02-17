import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authenticationService: AuthenticationService, private router:Router, private snackBar:MatSnackBar){}

  onSubmit(form:NgForm){
    this.authenticationService.login(form.value).subscribe(result => {
      const userInfo = {"id":result.id, "email":result.user, "sessionID":result.sessionID}
      if(result.message === 'successfully logged in'){
        this.snackBar.open(result.message, 'Ok');
        localStorage.setItem('user', JSON.stringify(userInfo));
        this.router.navigate(['/todo']);
      }else{
        this.snackBar.open(result.message, 'Ok');
      }
    });
  }
}
