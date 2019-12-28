import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DashboardService {
  composeMail: BehaviorSubject<boolean>;
  unReadMsgCount: BehaviorSubject<number>;
  currentInboxMail : BehaviorSubject<Object>;
  currentUser = {};
  public baseApi = "api.insight.com";
  public inboxApi = "/inboxmail";
  public sendMailApi = "/sendmail";
  public sentMailApi = "/sentmail";
  public readMailApi = "/read";

  constructor(private http: HttpClient) {
    this.composeMail = new BehaviorSubject(false);
    this.unReadMsgCount = new BehaviorSubject(0);
    this.currentInboxMail = new BehaviorSubject({});
  }

  get CurrentUser() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser;
  }

  sendMail(payload) {
    const url = this.baseApi + this.sendMailApi;
    return this.http.post(url, payload);
  }
  inboxMail() {
    const url = this.baseApi + this.inboxApi;
    return this.http.get(url);
  }
  sentMail() {
    const url = this.baseApi + this.sentMailApi;
    return this.http.get(url);
  }
  readMail(payload) {
    const url = this.baseApi + this.readMailApi;
    return this.http.post(url, payload);
  }
}
