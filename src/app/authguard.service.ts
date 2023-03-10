import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './auth/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private authService : AuthenticationService, private router : Router) { }

  canActivate(next:ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    let url: string = state.url;
    return this.checkUserLogin(next, url);
  }

  checkUserLogin(route: ActivatedRouteSnapshot, url: any):boolean {
    if (this.authService.isAuthenticated()) {
      const userRole = this.authService.getUserInfo();
      //if no user found in local storage
      if(route.data['role'] && route.data['role'].indexOf(userRole.role) === -1){
        this.router.navigate(['/']);
        return false
      }
      //if a user role accessed user page
      if(route.routeConfig && route.routeConfig.path === 'user' && userRole.role === 'user'){
        this.router.navigate(['/']);
        return false;
      }
      //if an admin role accessed todo page
      if(route.routeConfig && route.routeConfig.path === 'todo' && userRole.role==='admin'){
        this.router.navigate(['/']);
        return false;
      }
      return true;
    }
      this.router.navigate(['/']);
      return false;
  }

  
}