import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "../login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public errorMessage;
  loginForm = new FormGroup({
    userName: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  currentUser: Object;
  match: boolean;
  message: string;
  data: Object;
  tokenId: Object;
  constructor(private route: Router, private loginService: LoginService) {}

  ngOnInit() {
    if (localStorage.getItem("currentUser")) {
      this.route.navigate(["/"]);
    }
  }

  get ControlValue() {
    return this.loginForm.controls;
  }

  onLogin() {
    if (this.loginForm.valid) {
      const payload = {
        email: this.ControlValue.userName.value.toLowerCase(),
        pwd: this.ControlValue.password.value
      };
      return this.loginService.authoriseLogin(payload).subscribe(
        data => {
          localStorage.setItem("currentUser", JSON.stringify(data));
          this.route.navigate(["/"]);
        },
        err => {
          this.errorMessage = err.error.message;
        }
      );
    }
  }
}
