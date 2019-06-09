import * as PlatReducer from './plat.reducers';
import { ActionReducerMap } from '@ngrx/store';
import * as routerReducer from '@ngrx/router-store';

export interface State{
    plats: PlatReducer.PlatState;
    routers:  routerReducer.RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
    plats: PlatReducer.platReducer,
    routers: routerReducer.routerReducer
}