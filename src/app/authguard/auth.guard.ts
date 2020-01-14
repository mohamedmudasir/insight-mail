import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route : Router) {}
  canActivate() {
    if(!localStorage.getItem('currentUser')) {
      this.route.navigate(['/u/login']);
      return false;
    }
    else {
      return true;
    }
  }
  
}
