import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectHomeComponent } from './connect-home/connect-home.component';
import { SaveFoodComponent } from './save-food/save-food.component';
import { SavePlaceComponent } from './save-place/save-place.component';
import { AuthGuard } from '../shared/garde/auth.guard';

const routes: Routes = [
  {
    path:'',          
    component: ConnectHomeComponent,
    pathMatch: "full",    
  },
  {
    path:'food',
    canActivate: [AuthGuard],
    component: SaveFoodComponent    
  },
  {
    path:'place',
    canActivate: [AuthGuard],
    component: SavePlaceComponent    
  },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectRoutingModule { }
