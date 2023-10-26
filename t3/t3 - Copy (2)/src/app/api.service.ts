import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = 'localhost:3000';

  constructor(private http: HttpClient) { }

  registerUser(userData: any): Observable<any> {
    const url = `${this.baseUrl}/auth/register`;
    return this.http.post(url, userData);
  }
  loginUser(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { email, password });
  }
  
}
