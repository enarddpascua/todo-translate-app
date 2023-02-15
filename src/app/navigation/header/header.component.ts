import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
loggedIn:any = sessionStorage.getItem('x');

  
@Output() sideNavToggle = new EventEmitter<void>();

constructor(private authenticationService:AuthenticationService, private snackBar: MatSnackBar){}

public get isLoggedIn(){
  return this.authenticationService.isLoggedIn();
}

 onToggleSideNav(){
  this.sideNavToggle.emit();
 }

 onLogout(){
  console.log(this.isLoggedIn);
  this.snackBar.open("Successfully logged out", "Ok",{
    duration: 3000,
    verticalPosition:'top'
  });
  this.authenticationService.logout();
 }
}
