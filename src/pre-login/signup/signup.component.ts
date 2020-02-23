import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "../login.service";
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  public errorMessage;
  signupForm = new FormGroup({
    email: new FormControl("", Validators.required),
    userName: new FormControl("", Validators.required),
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
    const { password, confirmPassword } = this.ControlInputValue;
    if (password.value === confirmPassword.value) {
      return true;
    }
    this.errorMessage = " Passwords do not match!!";
    return false;
  }
  onRegister() {
    const { email, userName, password } = this.ControlInputValue;
    if (this.signupForm && this.pwdMatch()) {
      const payload = {
        email: email.value.toLowerCase().trim(),
        name: userName.value,
        pwd: password.value
      };
      return this.loginService.registerUser(payload).subscribe(
        data => {
          this.errorMessage = data;
          this.signupForm.reset();
        },
        err => {
          if (err && err.error) {
            this.errorMessage = err.error.message;
          }
        }
      );
    }
  }
}
