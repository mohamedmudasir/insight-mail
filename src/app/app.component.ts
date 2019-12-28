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
      sender_name: "Messie",
      recipient_email: "david00@gmail.com",
      cc_id: "",
      bcc_id: "",
      subject: "Application for job",
      mail_body: "Applying for job",
      sent_at: 1577277138050,
      read: false,
      starred: false
    },
    {
      sender_email: "messie34@gmail.com",
      sender_name: "Messie",
      recipient_email: "david00@gmail.com",
      cc_id: "",
      bcc_id: "",
      subject: "Application for job",
      mail_body: "Applying for job",
      sent_at: 1577277138090,
      read: true,
      starred: false
    },
    {
      sender_email: "messie34@gmail.com",
      sender_name: "Messie",
      recipient_email: "david00@gmail.com",
      cc_id: "",
      bcc_id: "",
      subject: "Application for job",
      mail_body: "Applying for job",
      sent_at: 1577277138030,
      read: false,
      starred: false
    },
    {
      sender_email: "messie34@gmail.com",
      sender_name: "Messie",
      recipient_email: "david00@gmail.com",
      cc_id: "",
      bcc_id: "",
      subject: "Application for job",
      mail_body: "Applying for job",
      sent_at: 1577277138100,
      read: true,
      starred: false
    },
    {
      sender_email: "messie34@gmail.com",
      sender_name: "Messie",
      recipient_email: "david00@gmail.com",
      cc_id: "",
      bcc_id: "",
      subject: "Application for job",
      mail_body: "Applying for job",
      sent_at: 1577277138900,
      read: true,
      starred: false
    },
    {
      sender_email: "messie34@gmail.com",
      sender_name: "Messie",
      recipient_email: "david00@gmail.com",
      cc_id: "",
      bcc_id: "",
      subject: "Application for job",
      mail_body: "Applying for job",
      sent_at: 1577277138800,
      read: true,
      starred: false
    },
    {
      sender_email: "messie34@gmail.com",
      sender_name: "Messie",
      recipient_email: "david00@gmail.com",
      cc_id: "",
      bcc_id: "",
      subject: "Application for job",
      mail_body: "Applying for job",
      sent_at: 1577277138050,
      read: true,
      starred: false
    },
    {
      sender_email: "messie34@gmail.com",
      sender_name: "Messie",
      recipient_email: "david00@gmail.com",
      cc_id: "",
      bcc_id: "",
      subject: "Application for job",
      mail_body: "Applying for job",
      sent_at: 1577277138030,
      read: true,
      starred: false
    },
    {
      sender_email: "messie34@gmail.com",
      sender_name: "Messie",
      recipient_email: "david00@gmail.com",
      cc_id: "",
      bcc_id: "",
      subject: "Application for job",
      mail_body: "Applying for job",
      sent_at: 1577277138200,
      read: true,
      starred: false
    },
    {
      sender_email: "messie34@gmail.com",
      sender_name: "Messie",
      recipient_email: "david00@gmail.com",
      cc_id: "",
      bcc_id: "",
      subject: "Application for job",
      mail_body: "Applying for job",
      sent_at: 1577277139000,
      read: true,
      starred: false
    },
    {
      sender_email: "messie34@gmail.com",
      sender_name: "Messie",
      recipient_email: "david00@gmail.com",
      cc_id: "",
      bcc_id: "",
      subject: "Application for job",
      mail_body: "Applying for job",
      sent_at: 1577277139000,
      read: true,
      starred: false
    },
    {
      sender_email: "messie34@gmail.com",
      sender_name: "Messie",
      recipient_email: "david00@gmail.com",
      cc_id: "",
      bcc_id: "",
      subject: "Application for job",
      mail_body: "Applying for job",
      sent_at: 1577277138700,
      read: true,
      starred: false
    },
    {
      sender_email: "messie34@gmail.com",
      sender_name: "Messie",
      recipient_email: "david00@gmail.com",
      cc_id: "",
      bcc_id: "",
      subject: "Application for job",
      mail_body: "Applying for job",
      sent_at: 1577277138060,
      read: true,
      starred: false
    },
    {
      sender_email: "messie34@gmail.com",
      sender_name: "Messie",
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
      sender_name: "Messie",
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
      sender_name: "Messie",
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
