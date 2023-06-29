// // auth.service.ts
// import { Injectable } from '@angular/core';
// import { Observable, of, throwError } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//      validUsername = 'admin';
//      validPassword = 'password';
//   login(username: string, password: string): Observable<any> {
//     // Simulate an API call to check login credentials
//     // Replace this with your actual login logic
 

//     if (username === this.validUsername && password === this.validPassword) {
//       // Return a successful response
//       return of({ token: 'dummy-token' });
//     } else {
//       // Return an error response
//     //   return Observable.throw(new Error('Invalid username or password'));
//     return throwError(new Error('Invalid username or password'));

//     }
//   }
// }

// auth.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from './user.model';

@Injectable()
export class AuthService {
   

         validUsername = 'admin';
     validPassword = 'password';
  login(username: string, password: string): Observable<User | null> {
    // Simulate checking the username and password

    if (username === this.validUsername && password === this.validPassword) {
    
      // Simulating an API call
      return of({ id: 1, username: 'john', password: '123456' });
    // return of({ token: 'dummy-token' });
    } else {
      return of(null);
    }
  }

  clearUserData() {
    // Clear user data logic
    console.log('logic for cleardata')
  }
}
