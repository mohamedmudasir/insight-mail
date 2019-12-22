import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {LoginService} from '../login.service';
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  public errorMessage;
  signupForm = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    confirmPassword: new FormControl("", Validators.required)
  });

  match: boolean;
  message: string;
  formData = this.signupForm.controls;
  data: Object;
  constructor(private loginService: LoginService) {}

  ngOnInit() {}

  get ControlInputValue() {
    return this.signupForm.controls;
  }
  pwdMatch() {
    if (
      this.ControlInputValue.password.value ===
      this.ControlInputValue.confirmPassword.value
    ) {
      return true;
    }
    this.errorMessage = " Passwords do not match!!";
    return false;
  }
  onRegister() {
    if (this.signupForm && this.pwdMatch()) {
      const payload = {
        email: this.ControlInputValue.email.value.toLowerCase().trim(),
        pwd: this.ControlInputValue.password.value
      };
      return this.loginService.registerUser(payload).subscribe(
        data => {
          this.errorMessage = data;
          console.log(data);
          this.signupForm.reset();
        },
        err => {
          if (err && err.error) {
            this.errorMessage = err.error.message;
          }
        }
      );
    }
    console.log('hello')
  }
}
