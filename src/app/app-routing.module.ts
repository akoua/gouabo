import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import {  } from "./connect/connect.module"

const routes: Routes = [
  /* {path:"", redirectTo:"composant", pathMatch:"full"}, */
  {path:"", loadChildren: "./composants/composants.module#ComposantsModule"},
  {path:"composant", loadChildren:"./composants/composants.module#ComposantsModule"},
  //{path:"connexion/:type", loadChildren: "./connect/connect.module#ConnectModule"}
  {path:"connexion", loadChildren: "./connect/connect.module#ConnectModule"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
