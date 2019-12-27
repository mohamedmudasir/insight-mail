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
@Component({
  selector: "app-mail-list",
  templateUrl: "./mail-list.component.html",
  styleUrls: ["./mail-list.component.scss"]
})
export class MailListComponent implements OnInit {
  public inboxData;
  public unReadCount: number;
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
  refresh() {
    this.dashBoardService
      .inboxMail()
      .subscribe((data: any) => (this.inboxData = data.data.reverse()));
  }
  readMail(selectedMail) {
    this.route.navigate(["/details"]);
    this.dashBoardService
      .readMail(selectedMail)
      .subscribe(() => this.dashBoardService.inboxMail().subscribe());
  }
}
