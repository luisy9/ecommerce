import { CanActivateFn } from '@angular/router';

export const guardAccessGuard: CanActivateFn = (route, state): any => {
  return localStorage.getItem('user-info') ? true : false;
};
