import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { of } from 'rxjs';

// @ts-ignore
import { LocalStorageService } from '@core/services';
// @ts-ignore
import { environment } from '@env/environment';

@Injectable()
export class AuthService {
  private authApi: string = `${environment.apiUrl}`;

  constructor(
    private http: HttpClient,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  get token(): string {
    return this.localStorageService.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let token: string = this.token;
    if (token) return true;
    return false;
  }

  login(formData: FormData): Observable<Object> {
    const loginUrl = `${this.authApi}/login`;
    return of([]);
    // return this.http.post(loginUrl, formData);
  }

  logout(): void {
    this.localStorageService.clear();
    this.router.navigate(['auth']);
  }
}
