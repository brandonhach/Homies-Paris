import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StripeService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getSecret(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}`);
  }
}
