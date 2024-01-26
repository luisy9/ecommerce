import { Injectable } from '@angular/core';
import { UserService } from '../users/user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserStoreService {

  private data$!: Observable<string>;

  constructor(private dataIsLoggedUser: UserService) {
    this.data$ = dataIsLoggedUser.isLoggedUserGetter;
  }

  isLoggedUser() {
    this.data$.subscribe((token: string) => {
      if (token.length > 0) {
        const userData: {isLogged: boolean; token: string} = {
          isLogged: true,
          token
        }
        const loadUserData = localStorage.setItem('user-info', JSON.stringify(userData));
      }
    })
  }
}
