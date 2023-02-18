import { Component, OnInit } from '@angular/core';
import { UserLog } from '../auth/user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  loadedUsers:UserLog[] = [];
  panelOpenState = false;

  constructor(private userService:UserService){}

  ngOnInit(): void {
   this.getUsers();
  } 

  getUsers(){
    this.userService.getAllUsers().subscribe(users => {
      this.loadedUsers = users;
    })
  }

}
