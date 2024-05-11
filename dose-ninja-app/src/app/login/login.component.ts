// login.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  template: `
    <form [formGroup]="loginForm">
      <label>Username:</label>
      <input formControlName="username" type="text">
      <br>
      <label>Password:</label>
      <input formControlName="password" type="password">
      <br>
      <button type="submit">Login</button>
    </form>
  `
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login(): void {
    this.authService.login(this.loginForm.value);
  }
}
