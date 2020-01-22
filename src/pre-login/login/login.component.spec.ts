import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { LoginComponent } from "./login.component";
import { SignupComponent } from "../signup/signup.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule, Location } from "@angular/common";
import { RouterModule, Routes, Router } from "@angular/router";
import { PreLoginRoutingModule } from "../pre-login-routing.module";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { LoginService } from "../login.service";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

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
class MockRouter {
  navigate(path) {}
}

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: LoginService;
  let route: Router;
  let location: Location;

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
        HttpClientTestingModule,
        FontAwesomeModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    route = TestBed.get(Router);
    location = TestBed.get(Location);
    service = TestBed.get(LoginService);
    route.initialNavigation();
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
    expect(location.path()).toEqual("/");
  });
  // it("should  login only form is valid", () => {
  //   component.ControlValue.userName.setValue("david00@gmail.com");
  //   component.ControlValue.password.setValue("david123");
  //   const submit = fixture.debugElement.query(By.css("button"));
  //   submit.nativeElement.click();
  //   fixture.detectChanges();
  //   expect(component.loginForm.valid).toBeTruthy();
  //   const mockData = {
  //     email: "david00@gmail.com",
  //     name: "david",
  //     token: "fake-jwt-token"
  //   };
  //   const payload = {
  //     email: component.ControlValue.userName.value,
  //     pwd: component.ControlValue.password.value
  //   };
  //   const login = spyOn(component, "onLogin");
  //   expect(login).toHaveBeenCalled();
  // });
});
