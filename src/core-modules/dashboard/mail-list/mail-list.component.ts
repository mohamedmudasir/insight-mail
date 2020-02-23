import { Component, OnInit } from "@angular/core";
import {
  faSearch,
  faSync,
  faEye,
  faExclamation,
  faTrash,
  faArrowLeft,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { DashboardService } from "../dashboard.service";
import { Router } from "@angular/router";
import { MailData } from "src/app/mail-data.interface";
@Component({
  selector: "app-mail-list",
  templateUrl: "./mail-list.component.html",
  styleUrls: ["./mail-list.component.scss"]
})
export class MailListComponent implements OnInit {
  public inboxData: MailData[] = [];
  public unReadCount: number;
  selectedMails: MailData[] = [];
  selected: boolean = false;
  faIcons = {
    faSearch,
    faSync,
    faEye,
    faExclamation,
    faTrash,
    faArrowLeft,
    faArrowRight
  };

  constructor(
    private dashBoardService: DashboardService,
    private route: Router
  ) {}

  ngOnInit() {
    this.refresh();
    this.dashBoardService.unReadMsgCount.subscribe(
      count => (this.unReadCount = count)
    );
  }
  onChange(event, mail) {
    if (event.target.checked) {
      this.selectedMails.push(mail);
    } else {
      this.selectedMails = this.selectedMails.filter(
        el => JSON.stringify(el) != JSON.stringify(mail)
      );
    }
  }
  refresh() {
    this.dashBoardService.inboxMail().subscribe((data: any) => {
      this.inboxData = data.data;
      this.inboxData = this.inboxData.sort((a, b) => a.sent_at - b.sent_at);
    });
  }
  readMail(selectedMail) {
    this.route.navigate(["/details"]);
    this.dashBoardService.currentInboxMail.next(selectedMail);
    this.dashBoardService
      .readMail(selectedMail)
      .subscribe(() => this.dashBoardService.inboxMail().subscribe());
  }
  deleteMail() {
    const payload = this.selectedMails;
    this.dashBoardService.deleteMail(payload).subscribe(() => this.refresh());
  }
}
