import { Injectable } from '@angular/core';
import { UserLoginRequest, UserLoginResponse } from '../models/user.model';
import { MOCK_USERS } from '@mocks';

@Injectable({
  providedIn: 'root',
})
export class Security {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'auth_user';
  constructor() {}
   login(UserLoginRequest:UserLoginRequest): UserLoginResponse | null {
    const users =[...MOCK_USERS]
    const user = users.find(u => u.email === UserLoginRequest.email && u.password === UserLoginRequest.password)
    if(user !== undefined) {
      let userLoginResponse: UserLoginResponse = {
        token: 'mock-token',
        user: user
      };
      this.saveLocalStorage(userLoginResponse);
      return userLoginResponse;
    }
    return null;
   }
   private saveLocalStorage(userLoginResponse:UserLoginResponse): void {
    localStorage.setItem(this.TOKEN_KEY, userLoginResponse.token!);
    localStorage.setItem(this.USER_KEY, JSON.stringify(userLoginResponse.user));
  }
  getCurrentUser(): UserLoginResponse | null {
      const userJson = localStorage.getItem(this.USER_KEY);
      if(userJson) {
        const user: UserLoginResponse = {
          user: JSON.parse(userJson)
        };
        return user;
        }
        return null;
      }

    isAuthenticated(): boolean {
      return localStorage.getItem(this.TOKEN_KEY) !== null;
    }
    logout(): void {
      localStorage.removeItem(this.TOKEN_KEY);
      localStorage.removeItem(this.USER_KEY);
    }

}
