import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailContentComponent } from './mail-content.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
describe('MailContentComponent', () => {
  let component: MailContentComponent;
  let fixture: ComponentFixture<MailContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailContentComponent ],
      imports: [
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
