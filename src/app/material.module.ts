import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatListModule,
  MatGridListModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatStepperModule,
  MatSelectModule,  
  MatDialogModule,
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

const MATERIAL = [
  FlexLayoutModule,
  MatListModule,
  MatGridListModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatFormFieldModule,
  LayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatStepperModule,
  MatSelectModule,  
  MatDialogModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MATERIAL,
  ],
  exports: MATERIAL

})
export class MaterialModule { }
