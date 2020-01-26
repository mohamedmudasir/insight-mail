import { TestBed, async, inject } from "@angular/core/testing";

import { AuthGuard } from "./auth.guard";
import { RouterTestingModule } from "@angular/router/testing";

class MockRouter {
  navigate(path) {}
}

describe("AuthGuard", () => {
  let authGuard: AuthGuard;
  let router;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthGuard]
    });
    localStorage.removeItem('currentUser')
  });

  it("should ...", inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
  it("should allow navigation if user is logged-in", () => {
    router = new MockRouter();
    authGuard = new AuthGuard(router);
    const currentToken = {
      email: "david00@gmail.com",
      name: "david",
      token: "fake-jwt-token"
    };
    localStorage.setItem("currentUser", JSON.stringify(currentToken));
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    expect(currentUser).toBeDefined();
    authGuard.canActivate()
    expect(authGuard.canActivate()).toEqual(true);
  });
  it("should navigate to login page for unauthenticated user", () => {
    router = new MockRouter();
    authGuard = new AuthGuard(router);
    const currentUser = localStorage.getItem("currentUser");
    expect(authGuard.canActivate()).toBeFalsy();
    const routerSpy = spyOn(router, "navigate");
    router.navigate(["/u/login"]);
    expect(routerSpy).toHaveBeenCalledWith(["/u/login"]);
  });
});
