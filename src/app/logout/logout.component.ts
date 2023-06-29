// logout.component.ts
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from '../auth/action';


@Component({
  selector: 'app-logout',
  template: `
    <button (click)="onLogout()">Logout</button>
  `,
})
export class LogoutComponent {
  constructor(private store: Store) {}

  onLogout() {
    this.store.dispatch(logout());
  }
}
