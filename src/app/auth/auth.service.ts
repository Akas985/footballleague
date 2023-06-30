
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.model';
import { Users } from './selector'

@Injectable()
export class AuthService {



  validUsername = 'admin';
  validPassword = 'admin123';
  login(username: string, password: string): Observable<User | null> {
    // Simulate checking the username and password

    if (username === this.validUsername && password === this.validPassword) {

      return of({ id: 1, name: 'Akash', token: '123456' });

    } else {
      return of(null);
    }
  }

  clearUserData() {
    localStorage.removeItem('UserData');
    // this.store.dispatch(clearAuthState());
  }


}
