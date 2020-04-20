import { Component } from "@angular/core";
import { MailData } from "./mail-data.interface";
import * as mailData from "./data.json";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "insight-mail";
  mailData: MailData[];
  constructor() {
    if (!localStorage.getItem("mailData")) {
      localStorage.setItem("mailData", JSON.stringify(this.mailData));
    }
    this.mailData = mailData;
  }
}
