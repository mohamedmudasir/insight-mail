import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import { DashboardService } from "../dashboard.service";

@Component({
  selector: "app-mail-compose",
  templateUrl: "./mail-compose.component.html",
  styleUrls: ["./mail-compose.component.scss"]
})
export class MailComposeComponent implements OnInit {
  mailCompose = new FormGroup({
    sender_email: new FormControl(""),
    recepient_email: new FormControl("", Validators.required),
    cc_email: new FormControl(""),
    subject: new FormControl(""),
    mail_body: new FormControl("")
  });

  get ControlValue() {
    return this.mailCompose.controls;
  }

  faIcons = {
    faTimes,
    faTrash
  };
  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    if (this.dashboardService.CurrentUser.email) {
      this.ControlValue.sender_email.setValue(
        this.dashboardService.CurrentUser.email
      );
    }
  }
  closeModal() {
    this.dashboardService.composeMail.next(false);
  }
  sendMail() {
    const payload = {
      sender_email: this.ControlValue.sender_email.value,
      sender_name: this.dashboardService.currentUser["name"],
      recipient_email: this.ControlValue.recepient_email.value,
      cc_id: this.ControlValue.cc_email.value,
      subject: this.ControlValue.subject.value,
      mail_body: this.ControlValue.mail_body.value,
      sent_at: new Date().getTime()
    };
    this.dashboardService
      .sendMail(payload)
      .subscribe(data => console.log(data));
    this.closeModal();
  }
}
