import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private authenticationService:AuthenticationService, private router: Router, private snackBar:MatSnackBar){}

  onSubmit(form:NgForm){
    const reqBody={
      email:form.value.email,
      password:form.value.password,
      role:"user"
    }

    this.authenticationService.signup(reqBody).subscribe(result =>{
      if(result==="email already exists."){
        this.snackBar.open(result,'Ok');
        return;
      }
      form.reset();
      this.router.navigate(['/login']);
    });
  }
}
