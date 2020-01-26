import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SignupComponent } from "./signup.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterTestingModule } from "@angular/router/testing";
import { By } from "@angular/platform-browser";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("SignupComponent", () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterTestingModule,
        HttpClientTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should register only if password matches", () => {
    const register = spyOn(component, "onRegister").and.callThrough();
    component.ControlInputValue.email.setValue("david00@gmail.com");
    component.ControlInputValue.userName.setValue("david");
    component.ControlInputValue.password.setValue("abc");
    component.ControlInputValue.confirmPassword.setValue("abc");
    fixture.detectChanges();
    expect(component.pwdMatch()).toBeTruthy();
    fixture.debugElement
      .query(By.css("button"))
      .triggerEventHandler("click", null);
    fixture.detectChanges();
    expect(register).toHaveBeenCalled();
    component.signupForm.reset();
  });
  it("should display error for password mismatch", () => {
    const register = spyOn(component, "onRegister").and.callThrough();
    component.ControlInputValue.email.setValue("david00@gmail.com");
    component.ControlInputValue.userName.setValue("david");
    component.ControlInputValue.password.setValue("123");
    component.ControlInputValue.confirmPassword.setValue("1234");
    fixture.detectChanges();
    expect(component.pwdMatch()).toBeFalsy();
    const submit = fixture.debugElement.query(By.css("button"));
    submit.nativeElement.click();
    expect(register).toHaveBeenCalled();
    expect(component.errorMessage).toBe(" Passwords do not match!!");
  });
});
