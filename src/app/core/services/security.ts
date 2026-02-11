import { Injectable } from '@angular/core';
import { UserLoginRequest, UserLoginResponse } from '../models/user.model';
import { MOCK_USERS } from '@mocks';

@Injectable({
  providedIn: 'root',
})
export class Security {
  constructor() {}
   login(UserLoginRequest:UserLoginRequest): UserLoginResponse | undefined {
    const users =[...MOCK_USERS]
    const user = users.find(u => u.email === UserLoginRequest.email && u.password === UserLoginRequest.password)
    if(user){
      return {
        token: 'mock-token',
        user: user
      }
    }
    return undefined;
   }
}
