import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectHomeComponent } from './connect-home/connect-home.component';
import { SaveFoodComponent } from './save-food/save-food.component';
import { SavePlaceComponent } from './save-place/save-place.component';

const routes: Routes = [
  {
    path:'',
    component: ConnectHomeComponent,
    pathMatch: "full",    
  },
  {
    path:'food',
    component: SaveFoodComponent    
  },
  {
    path:'place',
    component: SavePlaceComponent    
  },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectRoutingModule { }
