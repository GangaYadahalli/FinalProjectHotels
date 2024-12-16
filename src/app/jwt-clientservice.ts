import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersService } from './services/users.service';
import { Observable } from 'rxjs/internal/Observable';
import { Users } from './model/Users';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {
  private token: string | null = null;
  private baseURL: string = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string | null {
    return this.token;
  }

  // Getting the token from login response
  getGeneratedToken(requestBody: any): Observable<any> {
    return this.http.post(this.baseURL+"users/login/authenticate", requestBody, { responseType: 'text' as 'json' });
  }

  authorizationTest(token: string): Observable<Users[]> {
    let tokenString = "Bearer" +token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
      
    }).set("Authorization", tokenString);

    return this.http.get<Users[]>(this.baseURL+"users/getall", { headers });
  }
}

