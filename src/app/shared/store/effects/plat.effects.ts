import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { FETCH_PLAT, FetchPlat, FetchPlatSuccess, FetchPlatError, ADD_PLAT, AddPlat } from '../actions/plat.action';
import { switchMap, map, catchError } from 'rxjs/operators';
import { FoodService } from '../../services/food.service';
import { Plat } from '../../models/plat.model';


@Injectable()
export class PlatsEffects {

    //Si nous ne voulons pas retourner d'action dans ce cas nous mettons le dispatch à false
    @Effect({dispatch: true})
    public fetchPlat$: Observable<Action> = this.action$.pipe(
        //Nous passons l'action que nous voulons traiter
        ofType(FETCH_PLAT),
        //à ce stade il prend en param l'action or switchMap retourne un Observable
        switchMap((fetchPlat: FetchPlat) => {
            return this.foodService.getFood();
        }),
        map( (plats: Plat[]) => {
            return new FetchPlatSuccess(plats);
        }),
        catchError((err: any) => {
            return of(new FetchPlatError(err));
        })
    );

    /*
    @Effect({dispatch: false})
    public addPlat$: Observable<Action> = this.action$.pipe(
        ofType(ADD_PLAT),
        switchMap((plat: AddPlat) => {
            return this.foodService.saveFood(plat);
        })
    );
*/
    //Injection de toutes les actions disponibles dans le store
    constructor(
        private action$: Actions,
        private foodService: FoodService
    ){}
}