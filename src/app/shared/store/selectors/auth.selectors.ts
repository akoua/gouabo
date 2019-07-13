import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from '../reducers/auth.reducers';


export const authSelector = createFeatureSelector<AuthState>('auth');

export const errorAuthSelector = createSelector(
    authSelector,
    (authState: AuthState) => {
        console.log(authState.error);
        return authState.error;
    }
);

export const succesAuthSelector = createSelector(
    authSelector,
    (authState: AuthState) => {
        console.log(authState.succes);
        return authState.succes;
    }
);
