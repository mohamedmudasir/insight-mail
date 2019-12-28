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

let users = JSON.parse(localStorage.getItem("registeredUsers")) || [];

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
            const user = users.filter(
              usr =>
                usr.email === email || (usr.name === email && usr.pwd === pwd)
            );
            if (user.length == 0) {
              return error("Email or Password  do not match");
            } else {
              return ok({
                email: user[0].email,
                name: user[0].name,
                token: "fake-jwt-token"
              });
            }
          }
          if (url.endsWith("/registerAuth") && method == "POST") {
            const { email, pwd } = body;
            console.log(body);
            const user = users.filter(usr => usr.email === email);
            if (user.length == 0) {
              users.push(body);
              localStorage.setItem("registeredUsers", JSON.stringify(users));
              return ok("Email / User name registered.. Login to continue");
            } else {
              return error(`User is already registered . Try Login`);
            }
          }
          if (url.endsWith("/inboxmail") && method == "GET") {
            const currentUser = JSON.parse(localStorage.getItem("currentUser"));
            let data = JSON.parse(localStorage.getItem("mailData"));
            let inboxMail = data.filter(
              el => el.recipient_email === currentUser["email"]
            );
            let cc_mail = data.filter(el => el.cc_id === currentUser["email"]);
            let bcc_mail = data.filter(
              el => el.bcc_id === currentUser["email"]
            );
            let inbox_mail = [...inboxMail, ...cc_mail, ...bcc_mail];
            let unReadCount = inbox_mail.filter(el => el.read !== true).length;
            this.dashboardService.unReadMsgCount.next(unReadCount);
            return ok({ data: inbox_mail });
          }
          if (url.endsWith("/read") && method == "POST") {
            if (body["read"] != true) {
              let data = JSON.parse(localStorage.getItem("mailData"));
              data.forEach((el, i) => {
                if (JSON.stringify(el) === JSON.stringify(body)) {
                  body["read"] = true;
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
            let data = localStorage.getItem("mailData");
            let msg_body = { ...body };
            msg_body["read"] = false;
            msg_body["starred"] = false;
            let mailData = JSON.parse(data);
            if (data) {
              mailData.push(msg_body);
              localStorage.setItem("mailData", JSON.stringify(mailData));
              return ok("Message sent successfully!");
            } else {
              let mail_local_data = [];
              mail_local_data.push(msg_body);
              localStorage.setItem("mailData", JSON.stringify(mail_local_data));
            }
          }
          if (url.endsWith("/sentmail") && method == "GET") {
            const currentUser = JSON.parse(localStorage.getItem("currentUser"));
            let data = JSON.parse(localStorage.getItem("mailData"));
            const sentMail = data.filter(
              el => el.sender_email === currentUser["email"]
            );
            return ok({ data: sentMail });
          }
          if (url.endsWith("/delete") && method == "POST") {
            const currentUser = JSON.parse(localStorage.getItem("currentUser"));
            let data = JSON.parse(localStorage.getItem("mailData"));
            if (body.length > 0) {
              body.forEach(el => {
                data = data.filter(
                  e => JSON.stringify(e) != JSON.stringify(el)
                );
              });
              localStorage.setItem("mailData", JSON.stringify(data));
              return ok("Mail deleted successfully!");
            }
            else {
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
  }
}
export const backEndProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: BackEndInterceptor,
  multi: true
};
