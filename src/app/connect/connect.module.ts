import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectRoutingModule } from './connect-routing.module';
import { ConnectHomeComponent } from './connect-home/connect-home.component';
import { MaterialModule } from '../material.module';
import { SaveFoodComponent } from './save-food/save-food.component';
import { SavePlaceComponent } from './save-place/save-place.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ConnectHomeComponent,
    SaveFoodComponent,
    SavePlaceComponent,
    
  ],
  imports: [
    CommonModule,
    ConnectRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ConnectModule { }
