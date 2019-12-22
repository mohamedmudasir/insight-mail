import { Component, OnInit } from '@angular/core';
import {faTimes, faTrash} from '@fortawesome/free-solid-svg-icons';
import {DashboardService} from '../dashboard.service';

@Component({
  selector: 'app-mail-compose',
  templateUrl: './mail-compose.component.html',
  styleUrls: ['./mail-compose.component.scss']
})
export class MailComposeComponent implements OnInit {
faIcons = {
  faTimes,
  faTrash
}
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
  }
  closeModal() {
    this.dashboardService.composeMail.next(false);
  }

}
