import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HeaderComponent } from "./header.component";
import { By } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { DebugElement } from "@angular/core";

class MockRouter {
  navigate(path) {}
}
describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let logoutEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        CommonModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should logout on click", () => {
    const router = new MockRouter();
    const onLogOutFn = spyOn(component, "onLogOut").and.callThrough();
    const routerSpy = spyOn(router, "navigate");
    logoutEl = fixture.debugElement.query(By.css("#logout"));
    logoutEl.triggerEventHandler('click', null)
    router.navigate(["/u/login"]);
    fixture.detectChanges();
    expect(onLogOutFn).toHaveBeenCalled();
    expect(routerSpy).toHaveBeenCalledWith(["/u/login"]);
  });
});
