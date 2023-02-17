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
loggedIn:any = localStorage.getItem('user');

  
@Output() sideNavToggle = new EventEmitter<void>();

constructor(private authenticationService:AuthenticationService, private snackBar: MatSnackBar){}

public get isLoggedIn(){
  return this.authenticationService.isLoggedIn();
}

 onToggleSideNav(){
  this.sideNavToggle.emit();
 }

 onLogout(){
  this.authenticationService.logout().subscribe(res => {  
    this.snackBar.open("Successfully logged out", "Ok",{
      duration: 3000,
      verticalPosition:'top'
    });
  })
 }
}
