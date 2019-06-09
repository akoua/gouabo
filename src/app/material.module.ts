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
  MatDividerModule,
  MatMenuModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatNativeDateModule,
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
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatMenuModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatListModule
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MATERIAL,
  ],
  exports: MATERIAL

})
export class MaterialModule { }
