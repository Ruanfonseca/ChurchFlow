// authentication.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuthenticated: boolean = false;

  authenticate(flag:boolean) {

    this.isAuthenticated = flag;

  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
