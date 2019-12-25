import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../dashboard.service';

@Component({
  selector: 'app-sent-mail-list',
  templateUrl: './sent-mail-list.component.html',
  styleUrls: ['./sent-mail-list.component.scss']
})
export class SentMailListComponent implements OnInit {
public sentData;
  constructor(private dashBoardService: DashboardService) { }

  ngOnInit() {
    this.sentData = this.dashBoardService.sentMail();
  }

}
