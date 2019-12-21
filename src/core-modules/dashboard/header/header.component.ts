import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  faEnvelope = faEnvelope;
  constructor(private route: Router) {}

  ngOnInit() {}

}
