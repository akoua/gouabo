import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComposantsRoutingModule } from './composants-routing.module';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatListModule, MatGridListModule, MatIconModule, MatCardModule, MatSidenavModule} from '@angular/material';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { MenuMovieComponent } from './menu-movie/menu-movie.component';
import { PlyrModule } from "ngx-plyr";
import { VgCoreModule } from "videogular2/core"; 
import { VgControlsModule } from "videogular2/controls";

@NgModule({
  declarations: [HomeComponent, MenuLateralComponent, MenuMovieComponent],
  imports: [
    CommonModule,
    PlyrModule,
    VgCoreModule,
    VgControlsModule,
    ComposantsRoutingModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule
  ]
})
export class ComposantsModule { }
