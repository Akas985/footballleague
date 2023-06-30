
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
