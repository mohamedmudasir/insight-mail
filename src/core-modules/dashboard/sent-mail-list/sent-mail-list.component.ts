import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../dashboard.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sent-mail-list',
  templateUrl: './sent-mail-list.component.html',
  styleUrls: ['./sent-mail-list.component.scss']
})
export class SentMailListComponent implements OnInit {
public sentData;
  constructor(private dashBoardService: DashboardService, private route: Router) { }

  ngOnInit() {
    this.dashBoardService.sentMail().subscribe((data: any) => this.sentData = data.data)
  }
readMail(selectedmail) {
  this.route.navigate(['/details']);
  console.log(selectedmail)
}
}
