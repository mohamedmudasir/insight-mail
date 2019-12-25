import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DashboardService {
  composeMail: BehaviorSubject<boolean>;
  unReadMsgCount : BehaviorSubject<number>;
  currentUser = {};
  public baseApi = "api.insight.com";
  public sendMailApi = "/sendmail";

  constructor(private http: HttpClient) {
    this.composeMail = new BehaviorSubject(false);
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.unReadMsgCount = new BehaviorSubject(0);
  }

  get CurrentUser() {
    return this.currentUser;
  }

  sendMail(payload) {
    const url = this.baseApi + this.sendMailApi;
    return this.http.post(url, payload);
  }
  inboxMail() {
    let data = [];
    data = JSON.parse(localStorage.getItem("mailData"));
    let inboxMail = data.filter(el => el.recipient_email === this.CurrentUser['email']);
    let cc_mail = data.filter(el => el.cc_id === this.CurrentUser['email']);
    let bcc_mail = data.filter(el => el.bcc_id === this.CurrentUser['email']);
    let inbox_mail = [...inboxMail,...cc_mail,...bcc_mail];
    let unReadCount = inbox_mail.filter(el => el.read !== true).length;
    this.unReadMsgCount.next(unReadCount);
    return inbox_mail;
  }
  sentMail() {
    let data = JSON.parse(localStorage.getItem('mailData'));
    const sentMail = data.filter(el => el.sender_email === this.CurrentUser['email']);
    return sentMail;
    
  }
}
