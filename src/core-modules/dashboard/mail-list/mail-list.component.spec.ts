import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MailListComponent } from "./mail-list.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CommonModule } from "@angular/common";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { DashboardService } from "../dashboard.service";
describe("MailListComponent", () => {
  let component: MailListComponent;
  let fixture: ComponentFixture<MailListComponent>;
  let service: DashboardService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MailListComponent],
      imports: [
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        CommonModule,
        RouterTestingModule
      ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(MailListComponent);
        component = fixture.componentInstance;
        service = TestBed.get(DashboardService);
        fixture.detectChanges();
      });
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should select mails on checkbox selection", () => {
    const MockData = {
      sender_name: "messie",
      subject: "Test mail",
      sent_at: 159340380438409
    };
    component.inboxData = [MockData];
    fixture.detectChanges();
    const changeSpy = spyOn(component, "onChange").and.callThrough();
    const checkbox = fixture.debugElement
      .query(By.css(".checkbox"))
      .triggerEventHandler("change", null);
    expect(changeSpy).toHaveBeenCalled();
  });
  it("should delete selected messages on click", () => {
    const deleteFnSpy = spyOn(component, "deleteMail").and.callThrough();
    const deleteBtn = fixture.debugElement
      .query(By.css("#delete"))
      .triggerEventHandler("click", null);
    expect(deleteFnSpy).toHaveBeenCalled();
  });
  it("should read mail and navigate", () => {
    const MockData = {
      sender_name: "messie",
      subject: "Test mail",
      sent_at: 159340380438409
    };
    component.inboxData = [MockData];
    fixture.detectChanges();
    const readMailSpy = spyOn(component, "readMail").and.callThrough();
    const read = fixture.debugElement
      .query(By.css(".list-content"))
      .triggerEventHandler("click", null);
    expect(readMailSpy).toHaveBeenCalledWith(MockData);
  });
});
