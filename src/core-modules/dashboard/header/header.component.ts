import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DashboardService } from "../dashboard.service";
import {
  faEnvelope,
  faShareSquare,
  faBell
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  public unReadCount: number;
  faIcons = { faEnvelope, faShareSquare, faBell };
  constructor(
    private route: Router,
    private dashBoardService: DashboardService
  ) {}

  ngOnInit() {
    this.dashBoardService.unReadMsgCount.subscribe(
      data => (this.unReadCount = data)
    );
  }

  onLogOut() {
    console.log("clicked");
    localStorage.removeItem("currentUser");
    return this.route.navigate(["/u/login"]);
  }
}
