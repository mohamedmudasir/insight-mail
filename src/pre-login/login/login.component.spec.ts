import {
  async,
  ComponentFixture,
  TestBed,
  inject,
  tick,
  fakeAsync
} from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { LoginComponent } from "./login.component";
import { SignupComponent } from "../signup/signup.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule, Location } from "@angular/common";
import { RouterModule, Routes, Router } from "@angular/router";
import { PreLoginRoutingModule } from "../pre-login-routing.module";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";
import { LoginService } from "../login.service";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { DebugElement } from "@angular/core";

const loginRoutes: Routes = [
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  { path: "", redirectTo: "login", pathMatch: "full" }
];

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: LoginService;
  let route: Router;
  let location: Location;
  let submit: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent, SignupComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        PreLoginRoutingModule,
        RouterModule.forChild(loginRoutes),
        RouterTestingModule,
        HttpClientModule,
        FontAwesomeModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    route = TestBed.get(Router);
    location = TestBed.get(Location);
    service = fixture.debugElement.injector.get(LoginService);
    route.initialNavigation();
    component.ngOnInit();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should navigate to dashboard if already logged-in", () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    expect(currentUser).toBeDefined();
    route.navigate(["/"]);
    const router = spyOn(route, 'navigate');
    expect(router).toHaveBeenCalledWith(["/"]);
    expect(location.path()).toEqual("/");
  });
  it("should  login only form is valid", () => {
    const submit = fixture.debugElement.query(By.css("button"));
    submit.triggerEventHandler("click", null);
    fixture.detectChanges();
    const login = spyOn(component, "onLogin").and.callThrough();
    expect(login).toHaveBeenCalled();
    component.ControlValue.email.setValue("david00@gmail.com");
    component.ControlValue.pwd.setValue("david123");
    expect(component.loginForm.valid).toBeTruthy();
    const payload = {
      email: component.ControlValue.email.value,
      pwd: component.ControlValue.pwd.value
    };
    const serviceLogin = spyOn(service, 'authoriseLogin').and.callThrough()
    expect(serviceLogin).toHaveBeenCalledWith(payload);
  });
});
