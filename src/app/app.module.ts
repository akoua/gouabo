import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * Routes
 */
import { AppRoutingModule } from './app-routing.module';

/**
 * Module principal
 */
import { CoreModule } from './shared/modules/core.module';


@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,  
    CoreModule   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
