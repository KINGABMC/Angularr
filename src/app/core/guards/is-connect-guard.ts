import { CanActivateFn } from '@angular/router';
import { Security } from '../services/security';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
export const isConnectGuard: CanActivateFn = (route, state) => {
   let securityService: Security = inject(Security);
   let router = inject(Router);
   if(!securityService.isAuthenticated()) {
    router.navigate(['/public/login']);
    return false;
   }
  return true;
};
