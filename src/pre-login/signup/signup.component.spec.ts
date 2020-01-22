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
    component.ControlInputValue.email.setValue("david00@gmail.com");
    component.ControlInputValue.userName.setValue("david");
    component.ControlInputValue.password.setValue("abc");
    component.ControlInputValue.confirmPassword.setValue("abc");
    fixture.detectChanges();
    expect(component.pwdMatch).toBeTruthy();
    const submit = fixture.debugElement.query(By.css("button"));
    submit.nativeElement.click();
    const register = spyOn(component, "onRegister");
    expect(register).toHaveBeenCalled();
  });
});
