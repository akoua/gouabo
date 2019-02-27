import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  plats = ["Garba 1", "Cabato", "Viande", "Blue","Blue","Blue"]; 
  constructor() { }

  ngOnInit() {
  }

  readMovie(){
    console.log("bonjour");
  }

}
