import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/**
 * Components
 */
import { HeaderComponent } from '../components/header/header.component';
import { ConnexionComponent } from 'src/app/authentification/connexion/connexion.component';
import { ConnoComponent } from 'src/app/authentification/conno/conno.component';
import { InscriptionComponent } from 'src/app/authentification/inscription/inscription.component';

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
import { reducers } from '../store';
import { PlatsEffects } from '../store/plat.effects';

/**
 * environnement
 */
import { environment } from 'src/environments/environment';
import { MyLayoutModule } from './layout.module';
import { RouterModule } from '@angular/router';

export const COMPONENTS = [
   HeaderComponent,
    ConnexionComponent,
    ConnoComponent,
    InscriptionComponent
   ];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [    
    MyLayoutModule,
    RouterModule,
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
})
export class CoreModule { }
