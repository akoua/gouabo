import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/shared/store';
import * as PlatAction from "../../shared/store/plat.action";
import { Observable } from 'rxjs';
import { Plat } from 'src/app/shared/models/plat.model';
import { PlatState } from 'src/app/shared/store/plat.reducers';
import { map } from 'rxjs/operators';
import { platsListSelector, platlistArraySelector } from "../../shared/store/selectors";


export interface ColRow {
  color: string;
  cols: number;
  rows: number;  
  text: string;
}

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})

export class MenuLateralComponent implements OnInit {

  plats = ["Garba 1", "Cabato", "Viande", "Blue","Blue","Blue"]; 
  public plats$: Observable<Plat[]> = this.store.pipe(
    //Nous precisons ici le reducer à utiliser entre ceux présents dans le store
    select(platlistArraySelector)    
  );
  
  paramsCol: ColRow[] = [
    {text: 'Plaza Organisation', cols: 4, rows: 1, color: 'lightblue'},
    {text: 'Spécialité', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Contacts', cols: 1, rows: 1, color: 'lightblack'},
    {text: 'Localisation', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'contenu', cols: 1, rows: 1, color: 'lightblue'},
  ];
  
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new PlatAction.FetchPlat());
  }

  readMovie(){
    console.log("bonjour");
  }

  voirMenu(){
    
  }

}
