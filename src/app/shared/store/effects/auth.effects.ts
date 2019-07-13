import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as AuthAction from "../actions/auth.action";
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { Observable, of, empty } from 'rxjs';
import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';
import { AuthentificationService } from '../../services/authentification.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects{

    @Effect({dispatch:true})
    public trySignUp$: Observable<Action> = this.actions$.pipe(
        tap(x => {
            console.log(x)
        }),
        ofType(AuthAction.TRY_SIGNUP),
        //nous voulons retourner que le payload afin de le transmettre au service en charge 
        //d'enregistrer le User        
        map((action: AuthAction.TrySignup) => {
            console.log("TRY_SIGNUP APPELE");
            return action.payload
        }),        
        switchMap((user:User) =>{
            return this.authService.inscription(user)
        }),
        switchMap(()=>{
            //this.router.navigate(['/']);
            //new AuthAction.SignupSuccess();
            return empty()
        }),
        catchError((err:any) =>{
            console.log(err);
            return of(new AuthAction.SignupError(err));
        })

    );

    constructor(
        private actions$: Actions,
        private authService: AuthentificationService,
        private router: Router
    ){ console.log(this.actions$)}
}