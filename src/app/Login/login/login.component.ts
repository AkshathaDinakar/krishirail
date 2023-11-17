import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import the Router module

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.createLoginForm();
  }

  createLoginForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  signin() {
    if (this.loginForm.valid) {
      const userEmail = this.loginForm.value.email;
      const token = this.generateToken(userEmail);

      this.storeToken(token);

      // Redirect to the dashboard route
      this.router.navigate(['/dashboard/project']);
    }
  }

  generateToken(userEmail: string): string {
    return `Bearer ${userEmail}`;
  }

  storeToken(token: string) {
    localStorage.setItem('token', token);
  }
}
