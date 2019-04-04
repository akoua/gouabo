import { Injectable } from '@angular/core';
import { Pays } from '../models/pays.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtherService {

  public URL: string = "assets/geocodage.json";
  constructor(
    private http: HttpClient
  ) { }

  public searchAllTown(): Observable<Pays[]>  {
   return this.http.get<Pays[]>(this.URL);
   /*  this.http.get<any>(this.URL)
     .pipe(
       tap( x => {
         console.log("\n\t Http:", x);
       })
     ) */
     
      //console.log("\n\tHTTP");
  }
}
