import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {PreLoginRoutingModule} from './pre-login-routing.module';



@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    PreLoginRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PreLoginModule { }
