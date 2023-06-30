// // auth.effects.ts
// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { of } from 'rxjs';
// import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
// import { AuthService } from './auth.service';
// import { login, loginFailure, loginSuccess } from './action';
// import { Router } from '@angular/router';


// @Injectable()
// export class AuthEffects {
//   login$ = createEffect(() =>
//     // this.actions$.pipe(
//     //   ofType(login),
//     //   exhaustMap(({ username, password }) =>
//     //     this.authService.login(username, password).pipe(
//     //       map(() => loginSuccess()),
//     //     //   this.router.navigate(['/tablecomponent']),
//     //       catchError((error) => of(loginFailure({ error: error.message })))
//     //     )
//     //   )

//     this.actions$.pipe(
//         ofType(loginSuccess),
//         tap(() => {
//             alert('logged in')
//           this.router.navigate(['/tablecomponent']);
//         })
//       ),
//     { dispatch: false , }
    
//   );

//   constructor(
//     private actions$: Actions,
//     private authService: AuthService,
//     private router: Router
//   ) {}
// }



// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { of } from 'rxjs';
// import { catchError, map, mergeMap } from 'rxjs/operators';
// import { AuthService } from './auth.service';
// import { login, loginFailure, loginSuccess } from './action';


// @Injectable()
// export class AuthEffects {
//   login$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(login),
//       mergeMap((action) =>
//         this.authService.login(action.username, action.password).pipe(
//           map((user) => loginSuccess({ user })),
//           catchError((error) => of(loginFailure({ error: error.message })))
//         )
//       )
//     )
//   );

//   constructor(private actions$: Actions, private authService: AuthService) {}
// }

// app.effects.ts


// app.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, filter, map, mergeMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router'; // Import the Router service
import { login, loginFailure, loginSuccess } from './action';
import { AuthService } from './auth.service';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap((action) =>
        this.authService.login(action.username, action.password).pipe(
          map((user) => {
            // Check if the username and password match
            if (user) {
              // Dispatch the login success action
              
              this.router.navigate(['/tablecomponent']); // Navigate to the dashboard route
              return loginSuccess({ user });
            } else {
              return loginFailure({ error: 'Invalid username or password' });
            }
          }),
          catchError((error) => of(loginFailure({ error: error.message })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
