import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MailComposeComponent } from "./mail-compose.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { CommonModule } from "@angular/common";

describe("MailComposeComponent", () => {
  let component: MailComposeComponent;
  let fixture: ComponentFixture<MailComposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MailComposeComponent],
      imports: [
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        CommonModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailComposeComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
