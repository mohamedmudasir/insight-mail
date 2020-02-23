import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpResponse,
  HTTP_INTERCEPTORS,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { mergeMap, materialize, dematerialize, delay } from "rxjs/operators";
import { DashboardService } from "../../core-modules/dashboard/dashboard.service";
import { MailData, RegisteredUsers } from "../mail-data.interface";

let registeredUsers: RegisteredUsers[] =
  JSON.parse(localStorage.getItem("registeredUsers")) || [];

@Injectable()
export class BackEndInterceptor {
  constructor(private dashboardService: DashboardService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, body } = req;

    return of(null)
      .pipe(
        mergeMap(() => {
          if (url.endsWith("/loginAuth") && method == "POST") {
            const { email, pwd } = body;
            const loggedInUser = registeredUsers.filter(
              usr =>
                usr.email === email || (usr.name === email && usr.pwd === pwd)
            );
            if (loggedInUser.length == 0) {
              return error("Email or Password  do not match");
            } else {
              return ok({
                email: loggedInUser[0].email,
                name: loggedInUser[0].name,
                token: "fake-jwt-token"
              });
            }
          }
          if (url.endsWith("/registerAuth") && method == "POST") {
            const { email } = body;
            const loggedInUser = registeredUsers.filter(
              usr => usr.email === email
            );
            if (loggedInUser.length == 0) {
              registeredUsers.push(body);
              localStorage.setItem(
                "registeredUsers",
                JSON.stringify(registeredUsers)
              );
              return ok("Email / User name registered.. Login to continue");
            } else {
              return error(`User is already registered . Try Login`);
            }
          }
          if (url.endsWith("/inboxmail") && method == "GET") {
            const loggedInUser: RegisteredUsers = getCurrentUser();
            const data = getMailData();
            const inboxMail = data.filter(
              ({ recipient_email }) => recipient_email === loggedInUser.email
            );
            const cc_mail = data.filter(
              ({ cc_id }) => cc_id === loggedInUser.email
            );
            const bcc_mail = data.filter(
              el => el.bcc_id === loggedInUser.email
            );
            const inbox_mail = [...inboxMail, ...cc_mail, ...bcc_mail];
            const unReadCount = inbox_mail.filter(el => el.read !== true)
              .length;
            this.dashboardService.unReadMsgCount.next(unReadCount);
            return ok({ data: inbox_mail });
          }
          if (url.endsWith("/read") && method == "POST") {
            const { read } = body;
            if (read != true) {
              let data = getMailData();
              data.forEach((el, i) => {
                if (JSON.stringify(el) === JSON.stringify(body)) {
                  body.read = true;
                  data.splice(i, 1, body);
                  localStorage.setItem("mailData", JSON.stringify(data));
                  return ok({});
                } else {
                  return null;
                }
              });
            }
          }
          if (url.endsWith("/sendmail") && method == "POST") {
            const msg_body: MailData = { ...body };
            msg_body.read = false;
            msg_body.starred = false;
            let mailData = getMailData();
            if (mailData) {
              mailData.push(msg_body);
              localStorage.setItem("mailData", JSON.stringify(mailData));
              return ok("Message sent successfully!");
            } else {
              localStorage.setItem(
                "mailData",
                JSON.stringify([].push(msg_body))
              );
            }
          }
          if (url.endsWith("/sentmail") && method == "GET") {
            const loggedInUser = getCurrentUser();
            let data = getMailData();
            const sentMail = data.filter(
              el => el.sender_email === loggedInUser.email
            );
            return ok({ data: sentMail });
          }
          if (url.endsWith("/delete") && method == "POST") {
            let data = JSON.parse(localStorage.getItem("mailData"));
            if (body.length > 0) {
              body.forEach(el => {
                data = data.filter(
                  e => JSON.stringify(e) != JSON.stringify(el)
                );
              });
              localStorage.setItem("mailData", JSON.stringify(data));
              return ok("Mail deleted successfully!");
            } else {
              return ok({});
            }
          }
          return next.handle(req);
        })
      )
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());

    // Status handlers
    function ok(body?) {
      return of(new HttpResponse({ status: 200, body }));
    }
    function error(message) {
      return throwError({ error: { message } });
    }
    function getCurrentUser() {
      return JSON.parse(localStorage.getItem("currentUser"));
    }
    function getMailData() {
      return JSON.parse(localStorage.getItem("mailData"));
    }
  }
}
export const backEndProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: BackEndInterceptor,
  multi: true
};
