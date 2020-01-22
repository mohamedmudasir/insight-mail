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
  });

  it("should ...", inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
  it("should allow navigation if user is logged-in", () => {
    router = new MockRouter();
    authGuard = new AuthGuard(router);
    localStorage.setItem("currentUser", "authenticated");
    const currentUser = localStorage.getItem("currentUser");
    expect(currentUser).toBeDefined();
    expect(authGuard.canActivate()).toEqual(true);
    localStorage.removeItem("currentUser");
  });
  it("should navigate to login page for unauthenticated user", () => {
    router = new MockRouter();
    authGuard = new AuthGuard(router);
    const currentUser = localStorage.getItem("currentUser");
    expect(currentUser).toBe(null);
    expect(authGuard.canActivate()).toBeFalsy();
    const routerSpy = spyOn(router, "navigate");
    router.navigate(["/u/login"]);
    expect(routerSpy).toHaveBeenCalledWith(["/u/login"]);
  });
});
