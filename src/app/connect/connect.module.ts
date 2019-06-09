import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConnectRoutingModule } from './connect-routing.module';

/**
 * Components
 */
import { ConnectHomeComponent } from './connect-home/connect-home.component';
import { SaveFoodComponent } from './save-food/save-food.component';
import { SavePlaceComponent } from './save-place/save-place.component';

/**
 * Vue
 */
import { MyLayoutModule } from '../shared/modules/layout.module';

@NgModule({
  declarations: [
    ConnectHomeComponent,
    SaveFoodComponent,
    SavePlaceComponent
  ],
  imports: [    
    MyLayoutModule,    
    ConnectRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ConnectModule { }
