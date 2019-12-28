import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../dashboard.service';

@Component({
  selector: 'app-mail-content',
  templateUrl: './mail-content.component.html',
  styleUrls: ['./mail-content.component.scss']
})
export class MailContentComponent implements OnInit {
 mailContent: any;
  constructor(private dashBoardService: DashboardService) { }

  ngOnInit() {
    this.dashBoardService.currentInboxMail.subscribe(data => {
      console.log(data,'current');
      this.mailContent = data;
    });
  }

}
