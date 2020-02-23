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
    email: new FormControl("", Validators.required),
    pwd: new FormControl("", Validators.required)
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

  getFormControlValues() {
    const formData = {};
    Object.keys(this.loginForm.controls).forEach(control => {
      formData[control] = this.loginForm.controls[control].value;
    });
    return formData;
  }

  onLogin() {
    const payload = {
      ...this.getFormControlValues(),
      email: this.loginForm.controls.email.value.toLowerCase().trim()
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
