import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MailComposeComponent } from "./mail-compose.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { By } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { DashboardService } from "../dashboard.service";

describe("MailComposeComponent", () => {
  let component: MailComposeComponent;
  let fixture: ComponentFixture<MailComposeComponent>;
  let service: DashboardService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MailComposeComponent],
      imports: [
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        CommonModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailComposeComponent);
    component = fixture.componentInstance;
    service = TestBed.get(DashboardService);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should close modal", () => {
    const closeModalSpy = spyOn(component, "closeModal").and.callThrough();
    fixture.debugElement
      .query(By.css("#close"))
      .triggerEventHandler("click", null);
    expect(closeModalSpy).toHaveBeenCalled();
  });
  it("should set current user email in TO field", () => {
    const currentUser = {
      email: "david00@gmail.com",
      name: "david",
      token: "fake-jwt-token"
    };
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    component.ngOnInit();
    expect(service.CurrentUser.email).toBe("david00@gmail.com");
  });
  it("should send mail on button click", () => {
    const sendMailSpy = spyOn(component, "sendMail").and.callThrough();
    fixture.debugElement
      .query(By.css("button"))
      .triggerEventHandler("click", null);
    expect(sendMailSpy).toHaveBeenCalled();
  });
});
