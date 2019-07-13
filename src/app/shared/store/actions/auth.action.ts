import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';


export const TRY_SIGNUP = "[user] try_signup";
export const SIGNUP_SUCCESS = "[user] signup_success";
export const SIGNUP_ERROR = "[user] signup_error";

export const TRY_SIGNIN = "[user] try_signin";
export const SIGNIN_SUCCESS = "[user] signin_success";
export const SIGNIN_ERROR = "[user] signin_error";

export const TRY_FETCH_CURRENT_USER = "[user] try fetch current user";
export const SET_CURRENT_USER = "[user] set current user";

/**
 * SIGNUP
 */
export class TrySignup implements Action{
    readonly type = TRY_SIGNUP;
    constructor(public payload: User){console.log("je suis TrySignUp",payload)};
}
export class SignupSuccess implements Action{
    readonly type = SIGNUP_SUCCESS;
    constructor(){};
}
export class SignupError implements Action{    
    readonly type = SIGNUP_ERROR;
    constructor(public payload: any){ console.log("je suis ERROR",payload)};
}

/**
 * SIGNIN
 */
export class TrySignin implements Action{
    readonly type = TRY_SIGNIN;
    constructor(public payload: {email: string, password: string}){};
}
export class SigninSuccess implements Action{
    readonly type = SIGNIN_SUCCESS;
    constructor(public payload: string){};
}
export class SigninError implements Action{
    readonly type = SIGNIN_ERROR;
    constructor(public payload: any){};
}

/**
 * FETCH
 */
export class TryFetchCurrentUser implements Action{
    //pas de payload car on se servira du token dans le state pour vérifier auprès du serveur
    readonly type = TRY_FETCH_CURRENT_USER;    
}
export class SetCurrentUser implements Action{    
    readonly type = SET_CURRENT_USER;    
    constructor(public payload: User){};
}

export type AuthActionsType = TrySignup |
                          SignupSuccess |
                          SignupError |
                          TrySignin |
                          SigninSuccess |
                          SigninError |
                          TryFetchCurrentUser |
                          SetCurrentUser ;