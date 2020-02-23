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
    recipient_email: new FormControl("", Validators.required),
    cc_id: new FormControl(""),
    subject: new FormControl(""),
    mail_body: new FormControl("")
  });

  faIcons = {
    faTimes,
    faTrash
  };
  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    if (this.dashboardService.CurrentUser.email) {
      this.mailCompose.controls.sender_email.setValue(
        this.dashboardService.CurrentUser.email
      );
    }
  }
  closeModal() {
    this.dashboardService.composeMail.next(false);
  }
  getFormControlValues() {
    const formData = {};
    Object.keys(this.mailCompose.controls).forEach(control => {
      formData[control] = this.mailCompose.controls[control].value;
    });
    return formData;
  }
  sendMail() {
    const payload = {
      ...this.getFormControlValues(),
      sender_name: this.dashboardService.currentUser["name"],
      sent_at: new Date().getTime()
    };
    console.log(payload);
    this.dashboardService
      .sendMail(payload)
      .subscribe(data => console.log(data));
    this.closeModal();
  }
}
