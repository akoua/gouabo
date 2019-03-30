import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-restaurant',
  templateUrl: './menu-restaurant.component.html',
  styleUrls: ['./menu-restaurant.component.css']
})
export class MenuRestaurantComponent implements OnInit {
  
  places = ["Plaza Ok", "Plaza cool", "Babadjan"]

  constructor() { }

  ngOnInit() {
  }

}
