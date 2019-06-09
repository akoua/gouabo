import { NgModule } from '@angular/core';
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

const MATERIAL = [  
  MatListModule,
  MatGridListModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatFormFieldModule,
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
  imports: [    
    ...MATERIAL,
  ],
  exports: MATERIAL

})
export class MaterialModule { }
