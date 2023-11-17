import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated(): boolean {
    // Check if the user is authenticated (e.g., if a token is present)
    const token = localStorage.getItem('token');
    return !!token;
  }
}
