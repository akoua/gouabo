import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { Plat } from '../models/plat.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private serverUrl = "http://localhost:3000";

  constructor(
    private httpClient: HttpClient
  ) { }

  saveFood(plat: Plat): boolean {
    console.log(plat);
    return true;
  }

  getFood(): Observable<Plat[]>{

    return this.httpClient.
    get<Plat[]>(`${this.serverUrl}/plats`);
   /* return timer(2000).pipe(
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
    ); */
  } 
}
