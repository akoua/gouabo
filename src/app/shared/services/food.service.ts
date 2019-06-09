import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { Plat } from '../models/plat.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  saveFood(plat: Plat): boolean {
    console.log(plat);
    return true;
  }

  getFood(): Observable<Plat[]>{
    return timer(2000).pipe(
      map(() => [
        {
          id:"plat1xxx",
          nom: 'sauce',
          pays: 'CI',
          ingredients: [
            {
            nom:'piments',
            quantity: 12,
            unity: 'g'
            }
          ],
          note: 15
        },
        {
          id:"plat2xxx",
          nom: 'sauce',
          pays: 'CI',
          ingredients: [
            {
            nom:'piments',
            quantity: 12,
            unity: 'g'
            }
          ],
          note: 15
        }
      ])
    );
  }
}
