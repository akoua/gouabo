import { ActionReducerMap, Action } from '@ngrx/store';
import { Plat } from '../models/plat.model';
import { state } from '@angular/animations';
import * as PlatAction from "./plat.action";

export interface PlatState{
    datas: {
        [platId: string]: Plat
    } ;
    loading: boolean;
    loaded: boolean;
    error: any;
}

const initialState = {
    datas: null,
    loading: false,
    loaded: false,
    error: null
}

export function platReducer(state: PlatState = initialState, action: PlatAction.PlatActionType): PlatState{
    console.log(state, action);
    switch (action.type) {
        case PlatAction.FETCH_PLAT: {
            return{
                ...state,
                loading: true
            };
        }
        case PlatAction.FETCH_PLAT_SUCCESS: {
            return{
                ...state,
                loading:false,
                loaded:true,
                error: null,
                datas: action.payload.reduce((acc, plat) => {
                    acc[plat.id] = plat;
                    return acc;
                }, {...state.datas})
            };
        }
        case PlatAction.FETCH_PLAT_ERROR: {
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload
            };
        }
        case PlatAction.ADD_PLAT: {
            return {
                ...state,
                datas: {...state.datas, [action.payload.id]: action.payload}
            }
        }
        case PlatAction.PLAT_GET :
            return {
                ...state,
                datas: {...state.datas}
            }            
        case PlatAction.PLAT_CREATE:
            return {
                ...state,
                datas: {...state.datas, [Object.keys(state.datas).length]: action.payload}
            }
        default:
            return state;
    }
    return state;
}
