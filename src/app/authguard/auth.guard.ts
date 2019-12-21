import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route : Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    if(!localStorage.getItem('currentUser')) {
      console.log('authguard working')
      this.route.navigate(['/u/login']);
      return false;
    }
    else {
      return true;
    }
  }
  
}
