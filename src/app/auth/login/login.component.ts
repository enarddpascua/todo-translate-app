import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/snackbar.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authenticationService: AuthenticationService, private router:Router, private snackBar: SnackbarService){}

  onSubmit(form:NgForm){
    this.authenticationService.login(form.value).subscribe(result => {
      const userInfo = {"id":result.id, "email":result.user, "sessionID":result.sessionID,"role": result.role}
      if(result.message === 'successfully logged in'){
        this.snackBar.notifyUser(result.message, 'Ok');
        localStorage.setItem('user', JSON.stringify(userInfo));
        this.router.navigate(['/todo']);
      }else{
        this.snackBar.notifyUser(result.message, 'Ok');
      }
    });
  }
}
