import { Component, OnInit } from '@angular/core';
import {faEnvelope, faInbox, faStar, faFileSignature, faTrash, faCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
faIcons = {
  faEnvelope,
  faInbox,
  faStar,
  faFileSignature,
  faTrash,
  faCircle
}
  constructor() { }

  ngOnInit() {
  }

}
