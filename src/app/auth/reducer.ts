// // auth.reducer.ts
// import { createReducer, on } from '@ngrx/store';
// import { login, loginFailure, loginSuccess } from './action';
// // import { login, loginSuccess, loginFailure } from './auth.actions';

// export interface AuthState {
//   loggedIn: boolean;
//   loading: boolean;
//   error: string | null;
// }

// const initialState: AuthState = {
//   loggedIn: false,
//   loading: false,
//   error: null,
// };

// export const authReducer = createReducer(
//   initialState,
//   on(login, (state) => ({ ...state, loading: true })),
//   on(loginSuccess, (state) => ({ ...state, loggedIn: true, loading: false })),
//   on(loginFailure, (state, { error }) => ({ ...state, error, loading: false }))
// );


import { createReducer, on } from '@ngrx/store';
import { login, loginFailure, loginSuccess, logout } from './action';
import { User } from './user.model';
import { AuthService } from './auth.service';

// import { login, loginSuccess, loginFailure } from './app.actions';

export interface AppState {
  user: User | null;
  error: string | null;
  isLoggedIn: boolean;
}

export const initialState: AppState = {
  user: null,
  error: null,
  isLoggedIn: false,
};




export const authReducer = createReducer(
    initialState,
    on(login, (state) => ({ ...state, error: null })),
    on(loginSuccess, (state, { user }) => ({ ...state, user, isLoggedIn: true })),
    on(loginFailure, (state, { error }) => ({ ...state, error })),
    // on(logout, (state) => {
    //     // Clear user data
    //     AuthService.clearUserData();
    //     return initialState;
    //   })
  );