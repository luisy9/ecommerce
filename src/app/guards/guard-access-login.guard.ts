import { CanActivateFn } from '@angular/router';

export const guardAccessLoginGuard: CanActivateFn = (route, state): any => {
  return localStorage.getItem('user-info') ? false : true;
};
