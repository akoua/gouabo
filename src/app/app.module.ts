import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material.module';
import { ConnexionComponent } from './authentification/connexion/connexion.component';
import { InscriptionComponent } from './authentification/inscription/inscription.component';
import { ConnoComponent } from './authentification/conno/conno.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
/**
 * Module Firebase
 */
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";

/**
 * Modules Redux
 */
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule, routerReducer } from "@ngrx/router-store";
import { reducers } from './shared/store';
import { environment } from 'src/environments/environment';
import { PlatsEffects } from './shared/store/plat.effects';
import { RouterModule } from '@angular/router';


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
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule, 
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot(reducers),  
    EffectsModule.forRoot([PlatsEffects]),
    StoreDevtoolsModule.instrument({
      name:'store general'
    })  
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
