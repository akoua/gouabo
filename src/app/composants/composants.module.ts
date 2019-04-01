import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComposantsRoutingModule } from './composants-routing.module';
import { MaterialModule } from "../material.module";
import { DirectiveModule } from '../directives.module';

import { HomeComponent } from './home/home.component';

import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { MenuMovieComponent } from './menu-movie/menu-movie.component';
import { PlyrModule } from "ngx-plyr";
import { VgCoreModule } from "videogular2/core";
import { VgControlsModule } from "videogular2/controls";
import { VgOverlayPlayModule } from "videogular2/overlay-play";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MenuRestaurantComponent } from './menu-restaurant/menu-restaurant.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { RechercheComponent } from './recherche/recherche.component';


@NgModule({
  declarations: [HomeComponent,
    MenuLateralComponent,
    MenuMovieComponent,
    MenuRestaurantComponent,
    RechercheComponent,
  ],
  imports: [
    CommonModule,
    PlyrModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    ComposantsRoutingModule,
    MaterialModule,    
    FormsModule,
    ReactiveFormsModule,    
    DirectiveModule,
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ]

})
export class ComposantsModule { }
