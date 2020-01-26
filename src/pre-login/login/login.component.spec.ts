import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { LoginComponent } from "./login.component";
import { SignupComponent } from "../signup/signup.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes, Router } from "@angular/router";
import { PreLoginRoutingModule } from "../pre-login-routing.module";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { LoginService } from "../login.service";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

class MockRouter {
  navigate(path) {}
}

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: LoginService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent, SignupComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        PreLoginRoutingModule,
        RouterTestingModule,
        HttpClientTestingModule,
        FontAwesomeModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service = TestBed.get(LoginService);
    component.ngOnInit();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should navigate to dashboard if already logged-in", () => {
    const router = new MockRouter();
    localStorage.setItem("currentUser", "authenticated");
    const currentUser = localStorage.getItem("currentUser");
    expect(currentUser).toBeDefined();
    component.ngOnInit();
    const routerSpy = spyOn(router, "navigate");
    router.navigate(["/"]);
    expect(routerSpy).toHaveBeenCalledWith(["/"]);
  });
  it("should login only when form is valid", async(() => {
    const login = spyOn(component, "onLogin").and.callThrough();
    const submit = fixture.debugElement.query(By.css("button"));
    component.ControlValue.userName.patchValue("david00@gmail.com");
    component.ControlValue.password.patchValue("abc");
    submit.triggerEventHandler("click", null);
    fixture.detectChanges();
    expect(component.loginForm.valid).toBeTruthy();
    expect(login).toHaveBeenCalled();
    component.loginForm.reset();
  }));
});
