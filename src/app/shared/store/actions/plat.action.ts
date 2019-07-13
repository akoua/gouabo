import { Action } from '@ngrx/store';
import { Plat } from '../../models/plat.model';

export const PLAT_GET = "[plat] Get";
export const PLAT_CREATE = "[plat] Create";

export const FETCH_PLAT = "[Plat] fecth";
export const FETCH_PLAT_SUCCESS = "[Plat] fetch success";
export const FETCH_PLAT_ERROR = "[Plat] fetch error";

export const ADD_PLAT = "[plat] Add";
export const UPDATE_PLAT = "[plat] Update";
export const DELETE_PLAT = "[plat] Delete";


export class PlatGet implements Action{
    readonly type = PLAT_GET;
    constructor(){};
}

export class PlatCreate implements Action{
    readonly type =  PLAT_CREATE;
    constructor(public payload: Plat ){}
}

export class FetchPlat implements Action{
    readonly type = FETCH_PLAT;
}
export class FetchPlatSuccess implements Action{
    readonly type = FETCH_PLAT_SUCCESS;
    constructor(public payload: Plat[]){}
}
export class FetchPlatError implements Action {
    readonly type = FETCH_PLAT_ERROR;
    constructor(public payload: any){}
}

export class AddPlat implements Action{
    readonly type = ADD_PLAT;
    constructor(public payload: Plat){};
}

export type PlatActionType= PlatGet |
                            PlatCreate |
                            FetchPlat |
                            FetchPlatSuccess |
                            FetchPlatError |
                            AddPlat ;