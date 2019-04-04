import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  public triggerHeader$: Subject<boolean> = new Subject() ;
  private triggerHeader: boolean = false;

  constructor(
    private router: Router,
  ) { }

  connexion(): boolean {
    this.router.navigate(['']);
    this.triggerHeader = true;
    this.toggleTriggerHead();
    return true;
  }

  deconnexion(): void {
    this.router.navigate(['']);
    this.triggerHeader = false;
    this.toggleTriggerHead();
  }

  toggleTriggerHead(): void {    
    this.triggerHeader$.next(this.triggerHeader);
  }
}
