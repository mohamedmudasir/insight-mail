import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "insight-mail";
  constructor() {
    if (!localStorage.getItem("mailData")) {
      localStorage.setItem("mailData", JSON.stringify(this.mailData));
    }
  }
  mailData = [
    {
      sender_email: "messie34@gmail.com",
      sender_name: "Tamil",
      recipient_email: "david00@gmail.com",
      cc_id: "",
      bcc_id: "",
      subject: "Application for job",
      mail_body: "Applying for job",
      sent_at: 1577277138000,
      read: false,
      starred: false
    },
    {
      sender_email: "messie34@gmail.com",
      sender_name: "Tamil",
      recipient_email: "david00@gmail.com",
      cc_id: "",
      bcc_id: "",
      subject: "Application for job",
      mail_body: "Applying for job",
      sent_at: 1577277138000,
      read: true,
      starred: false
    },
    {
      sender_email: "messie34@gmail.com",
      sender_name: "Tamil",
      recipient_email: "david00@gmail.com",
      cc_id: "",
      bcc_id: "",
      subject: "Application for job",
      mail_body: "Applying for job",
      sent_at: 1577277138000,
      read: false,
      starred: false
    },
    {
      sender_email: "messie34@gmail.com",
      sender_name: "Tamil",
      recipient_email: "david00@gmail.com",
      cc_id: "",
      bcc_id: "",
      subject: "Application for job",
      mail_body: "Applying for job",
      sent_at: 1577277138000,
      read: true,
      starred: false
    },
    {
      sender_email: "messie34@gmail.com",
      sender_name: "Tamil",
      recipient_email: "david00@gmail.com",
      cc_id: "",
      bcc_id: "",
      subject: "Application for job",
      mail_body: "Applying for job",
      sent_at: 1577277138000,
      read: true,
      starred: false
    },
    {
      sender_email: "messie34@gmail.com",
      sender_name: "Tamil",
      recipient_email: "david00@gmail.com",
      cc_id: "",
      bcc_id: "",
      subject: "Application for job",
      mail_body: "Applying for job",
      sent_at: 1577277138000,
      read: true,
      starred: false
    },
    {
      sender_email: "messie34@gmail.com",
      sender_name: "Tamil",
      recipient_email: "david00@gmail.com",
      cc_id: "",
      bcc_id: "",
      subject: "Application for job",
      mail_body: "Applying for job",
      sent_at: 1577277138000,
      read: true,
      starred: false
    },
    {
      sender_email: "messie34@gmail.com",
      sender_name: "Tamil",
      recipient_email: "david00@gmail.com",
      cc_id: "",
      bcc_id: "",
      subject: "Application for job",
      mail_body: "Applying for job",
      sent_at: 1577277138000,
      read: true,
      starred: false
    },
    {
      sender_email: "messie34@gmail.com",
      sender_name: "Tamil",
      recipient_email: "david00@gmail.com",
      cc_id: "",
      bcc_id: "",
      subject: "Application for job",
      mail_body: "Applying for job",
      sent_at: 1577277138000,
      read: true,
      starred: false
    },
    {
      sender_email: "messie34@gmail.com",
      sender_name: "Tamil",
      recipient_email: "david00@gmail.com",
      cc_id: "",
      bcc_id: "",
      subject: "Application for job",
      mail_body: "Applying for job",
      sent_at: 1577277138000,
      read: true,
      starred: false
    },
    {
      sender_email: "messie34@gmail.com",
      sender_name: "Tamil",
      recipient_email: "david00@gmail.com",
      cc_id: "",
      bcc_id: "",
      subject: "Application for job",
      mail_body: "Applying for job",
      sent_at: 1577277138000,
      read: true,
      starred: false
    },
    {
      sender_email: "messie34@gmail.com",
      sender_name: "Tamil",
      recipient_email: "david00@gmail.com",
      cc_id: "",
      bcc_id: "",
      subject: "Application for job",
      mail_body: "Applying for job",
      sent_at: 1577277138000,
      read: true,
      starred: false
    },
    {
      sender_email: "messie34@gmail.com",
      sender_name: "Tamil",
      recipient_email: "david00@gmail.com",
      cc_id: "",
      bcc_id: "",
      subject: "Application for job",
      mail_body: "Applying for job",
      sent_at: 1577277138000,
      read: true,
      starred: false
    },
    {
      sender_email: "messie34@gmail.com",
      sender_name: "Tamil",
      recipient_email: "david00@gmail.com",
      cc_id: "",
      bcc_id: "",
      subject: "Application for job",
      mail_body: "Applying for job",
      sent_at: 1577277138000,
      read: true,
      starred: false
    },
    {
      sender_email: "messie34@gmail.com",
      sender_name: "Tamil",
      recipient_email: "david00@gmail.com",
      cc_id: "",
      bcc_id: "",
      subject: "Application for job",
      mail_body: "Applying for job",
      sent_at: 1577277138000,
      read: true,
      starred: false
    },
    {
      sender_email: "messie34@gmail.com",
      sender_name: "Tamil",
      recipient_email: "david00@gmail.com",
      cc_id: "",
      bcc_id: "",
      subject: "Application for job",
      mail_body: "Applying for job",
      sent_at: 1577277138000,
      read: true,
      starred: false
    }
  ];
}
