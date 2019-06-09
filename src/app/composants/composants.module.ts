import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

/**
 * Route
 */
import { ComposantsRoutingModule } from './composants-routing.module';

/**
 * Diective
 */
import { DirectiveModule } from '../directives.module';

/**
 * Components
 */
import { HomeComponent } from './home/home.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { MenuMovieComponent } from './menu-movie/menu-movie.component';
import { RechercheComponent } from './recherche/recherche.component';
import { MenuRestaurantComponent } from './menu-restaurant/menu-restaurant.component';

/**
 * Movie 
 */
import { PlyrModule } from "ngx-plyr";
import { VgCoreModule } from "videogular2/core";
import { VgControlsModule } from "videogular2/controls";
import { VgOverlayPlayModule } from "videogular2/overlay-play";
import { VgBufferingModule } from "videogular2/buffering";
import { VgStreamingModule } from "videogular2/streaming";


import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

/**
 * Module de vue
 */
import { MyLayoutModule } from '../shared/modules/layout.module';




@NgModule({
  declarations: [HomeComponent,
    MenuLateralComponent,
    MenuMovieComponent,
    MenuRestaurantComponent,
    RechercheComponent,    
  ],
  imports: [
    MyLayoutModule,
    PlyrModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VgStreamingModule,   
    ComposantsRoutingModule,    
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
