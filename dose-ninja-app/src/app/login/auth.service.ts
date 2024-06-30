
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'YOUR_BACKEND_API_URL'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) { }

  login(credentials: any) {
    // Implement your login logic here, e.g., send credentials to a server
    console.log('Login attempt with:', credentials);
  }

  registerUser(registrationData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, registrationData);
  }
}
