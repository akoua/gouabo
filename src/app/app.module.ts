import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from "./material.module";
import { ConnexionComponent } from './authentification/connexion/connexion.component';
import { InscriptionComponent } from './authentification/inscription/inscription.component';
import { ConnoComponent } from './authentification/conno/conno.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,   
    ConnexionComponent,
    ConnoComponent, 
    InscriptionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,    
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [
      ConnexionComponent,
      InscriptionComponent,
      ConnoComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
