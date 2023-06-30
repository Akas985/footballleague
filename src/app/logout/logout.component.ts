// logout.component.ts
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from '../auth/action';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logout',
  template: `
    <button (click)="onLogout()" style="background: none;
    color: #fff; cursor:pointer;">Logout</button>
  `,
})
export class LogoutComponent {
  constructor(private store: Store, private authService: AuthService, private router: Router) {}

  onLogout() {
    this.authService.clearUserData();
    this.store.dispatch(logout());
    this.router.navigate(['/']);
   
  }
}
