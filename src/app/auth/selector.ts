import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './reducer';


export const selectAuthState = createFeatureSelector<AppState>('auth');

export const isLoggedIn = createSelector(
  selectAuthState,
  (state: AppState) => state.isLoggedIn
);
