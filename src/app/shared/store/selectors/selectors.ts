import { PlatState } from '../reducers/plat.reducers';
import {createFeatureSelector, createSelector} from "@ngrx/store";

const platsSelector = createFeatureSelector<PlatState>("plats");

export const platsListSelector = createSelector(
    platsSelector,
    (platState: PlatState) => {
        return platState.datas;
    }
)

export const platlistArraySelector = createSelector(
    platsSelector,
    (platState: PlatState) => {
        if (platState.datas) {
            return Object.keys(platState.datas).map((idPlat) => platState.datas[idPlat]);
        } else {
            return null;
        }
    }
);