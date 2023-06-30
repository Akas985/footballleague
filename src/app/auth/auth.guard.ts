import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { isLoggedIn } from './selector';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}


  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(isLoggedIn),
      tap((loggedIn) => {
        if (!loggedIn) {
            alert('notlooged in')
          this.router.navigate(['']);
        }
      })
    );
  }
}