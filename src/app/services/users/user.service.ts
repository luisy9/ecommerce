import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../interfaces/interfaces';
import { BehaviorSubject, Observable, tap, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public isLoggedUser: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private httpClient: HttpClient) { }

  get isLoggedUserGetter(): Observable<string>{
    return this.isLoggedUser.asObservable();
  }

  login({ name, password }: User): any {
    if ((name && password).length > 0) {
      return this.httpClient.post<string>('http://localhost:3000/api/user/login/', { name, password }).pipe(tap((res: any) => {
        try {
          this.isLoggedUser.next(res.token);
        } catch (error) {
          this.isLoggedUser.next('');
          console.error(error)
        }
      })).subscribe();
    }
  }

  register({ name, password }: User): any {
    if ((name && password).length > 0) {
      return this.httpClient.post<string>('http://localhost:3000/api/user/register/', { name, password }).subscribe();
    }
  }
}
