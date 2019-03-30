import { Component, OnInit } from '@angular/core';

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
  
  paramsCol: ColRow[] = [
    {text: 'Plaza Organisation', cols: 4, rows: 1, color: 'lightblue'},
    {text: 'Spécialité', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Contacts', cols: 1, rows: 1, color: 'lightblack'},
    {text: 'Localisation', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'contenu', cols: 1, rows: 1, color: 'lightblue'},
  ];
  
  constructor() { }

  ngOnInit() {
  }

  readMovie(){
    console.log("bonjour");
  }

}
