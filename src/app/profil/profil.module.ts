import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from './profil.component';
import { RouterModule } from '@angular/router';
import { PROFIL_ROUTES } from './profil.routes';

@NgModule({
  declarations: [ProfilComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PROFIL_ROUTES)
  ]
})
export class ProfilModule { }
