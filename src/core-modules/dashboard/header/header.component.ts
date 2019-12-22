import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {faEnvelope, faShareSquare, faBell} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  faIcons = {faEnvelope, faShareSquare, faBell};
  constructor(private route: Router) {}

  ngOnInit() {}

}
