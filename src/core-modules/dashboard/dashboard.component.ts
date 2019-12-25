import { Component, OnInit } from "@angular/core";
import {
  faEnvelope,
  faInbox,
  faStar,
  faFileSignature,
  faTrash,
  faCircle,
  faTag
} from "@fortawesome/free-solid-svg-icons";
import { DashboardService } from "./dashboard.service";
import { Observable } from 'rxjs';
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  faIcons = {
    faEnvelope,
    faInbox,
    faStar,
    faFileSignature,
    faTrash,
    faCircle,
    faTag
  };
  public composeMail;
  public unReadCount : number;
  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.composeMail.subscribe(data => this.composeMail = data);
    this.dashboardService.unReadMsgCount.subscribe(data => this.unReadCount = data);
  }
  navigateToInbox(type) {
    console.log(type)
  }
}
