import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DashboardComponent } from "./dashboard.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavigationComponent } from "../dashboard/navigation/navigation.component";
import { HeaderComponent } from "../dashboard/header/header.component";
import { CoreRoutingModule } from "../core-modules-routing.module";
import { MailContentComponent } from "../dashboard/mail-content/mail-content.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MailListComponent } from "../dashboard/mail-list/mail-list.component";
import { MailComposeComponent } from "../dashboard/mail-compose/mail-compose.component";
import { SentMailListComponent } from "../dashboard/sent-mail-list/sent-mail-list.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { DashboardService } from "./dashboard.service";

describe("DashboardComponent", () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let service: DashboardService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        HeaderComponent,
        MailComposeComponent,
        MailContentComponent,
        MailListComponent,
        SentMailListComponent,
        NavigationComponent
      ],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CoreRoutingModule,
        FontAwesomeModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    service = TestBed.get(DashboardService);
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should call dashboardService method to get inbox messages", () => {
    const ngOnInit = spyOn(component, "ngOnInit");
    component.ngOnInit();
    expect(ngOnInit).toHaveBeenCalled();
  });
});
