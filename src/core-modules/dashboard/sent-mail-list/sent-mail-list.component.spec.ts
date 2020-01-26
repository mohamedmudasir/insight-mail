import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentMailListComponent } from './sent-mail-list.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CommonModule } from "@angular/common";
import {RouterTestingModule} from '@angular/router/testing'
describe('SentMailListComponent', () => {
  let component: SentMailListComponent;
  let fixture: ComponentFixture<SentMailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentMailListComponent ],
      imports: [
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        CommonModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentMailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
