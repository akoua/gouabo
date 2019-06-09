import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material.module';


const MODULE = [
  CommonModule,
  FlexLayoutModule,
  LayoutModule,
  MaterialModule
]
@NgModule({
  imports: [
   MODULE
  ],
  exports: MODULE
})
export class MyLayoutModule { }
