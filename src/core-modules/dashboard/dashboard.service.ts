import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  composeMail : BehaviorSubject<boolean>;
  constructor() {
    this.composeMail = new BehaviorSubject(false)
   }
}
