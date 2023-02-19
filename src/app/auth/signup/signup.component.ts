import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/snackbar.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private authenticationService:AuthenticationService, private router: Router, private snackBar:SnackbarService){}

  onSubmit(form:NgForm){
    const reqBody={
      email:form.value.email,
      password:form.value.password,
      role:"user"
    }

    this.authenticationService.signup(reqBody).subscribe(result =>{
      if(result==="email already exists."){
        this.snackBar.notifyUser(result,'Ok');
        return;
      }
      form.reset();
      this.snackBar.notifyUser(result, 'Ok');
      this.router.navigate(['/login']);
    });
  }
}
