import { User } from '../../models/user.model';
import * as AuthActions from '../actions/auth.action';


export interface AuthState{
    user: {
        [id:string]:User;
    };
    token:string;
    error: string;
    succes: string;
    isLoggedin: boolean;
}

const initialState = {
    user: null,
    token: null,
    error: null,
    succes: null,
    isLoggedin: false
}

export function authReducer(state: AuthState= initialState, action: AuthActions.AuthActionsType): AuthState {    
    switch (action.type) {
        case AuthActions.SIGNUP_ERROR: {            
            return {
                ...state,
                error: action.payload,
                succes: null
            };
        }  
        case AuthActions.SIGNUP_SUCCESS: {
            console.log("AuthActions.SIGNUP_SUCCESS ", action);
           return {
               ...state,
            error: null,
            succes: "Un mail vous a été envoyé"
           } 

        }                      
        default:
            return state;
            break;
    }
}