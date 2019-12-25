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

  constructor(private dashBoardService: DashboardService) {}

  ngOnInit() {
    this.refresh();
    this.dashBoardService.unReadMsgCount.subscribe(
      data => (this.unReadCount = data)
    );
  }
  refresh() {
    this.inboxData = this.dashBoardService.inboxMail().reverse();
  }
}
