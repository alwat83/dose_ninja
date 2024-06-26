import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  login(credentials: any) {
    // Implement your login logic here, e.g., send credentials to a server
    console.log('Login attempt with:', credentials);
  }
}