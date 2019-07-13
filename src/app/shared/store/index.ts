import { ActionReducerMap } from '@ngrx/store';
import * as PlatReducer from './reducers/plat.reducers';
import * as routerReducer from '@ngrx/router-store';
import * as AuthReducer from './reducers/auth.reducers';

export interface State{
    plats: PlatReducer.PlatState;
    routers:  routerReducer.RouterReducerState;
    auth: AuthReducer.AuthState;
}

export const reducers: ActionReducerMap<State> = {
    plats: PlatReducer.platReducer,
    routers: routerReducer.routerReducer,
    auth: AuthReducer.authReducer
}