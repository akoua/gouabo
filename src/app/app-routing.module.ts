import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import {  } from "../app/composants/composants.module"

const routes: Routes = [
  {path:"", redirectTo:"composant", pathMatch:"full"},
  {path:"composant", loadChildren:"./composants/composants.module#ComposantsModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
