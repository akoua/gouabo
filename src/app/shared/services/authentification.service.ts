import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  public triggerHeader$: Subject<boolean> = new Subject() ;
  private triggerHeader: boolean = false;
  private serverUrl = "http://localhost:3000";

  constructor(
    private router: Router,
    private http: HttpClient
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

  inscription(user: User): Observable<User> {
    //console.log(user);
    return this.http.post<User>(`${this.serverUrl}/users/`, user);
  }

  toggleTriggerHead(): void {    
    this.triggerHeader$.next(this.triggerHeader);
  }
}
