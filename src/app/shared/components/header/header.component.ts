import { Component, Output, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { MatDialog } from "@angular/material";
import { ConnexionComponent } from '../../../authentification/connexion/connexion.component'
import { InscriptionComponent } from '../../../authentification/inscription/inscription.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from '../../services/authentification.service';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  public toggleHeader: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver,
    private dialog: MatDialog,
    private router: Router,
    private authService: AuthentificationService,
    
  ) {}
  
  ngOnInit(): void {
        this.authService.triggerHeader$.subscribe( (x: boolean) => {        
          this.toggleHeader = x;
        })
  } 

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      tap(rsl => console.log(rsl))
    );

    public onSidenavClose = () => {
      //this.sidenavClose.emit();
    }

    public openDialog(): void {
      this.dialog.open(ConnexionComponent, {
        width: 'calc(30%)'        
      });
    }


    public openDialogI(): void {
      this.dialog.open(InscriptionComponent, {
        width: 'calc(30%)',              
      });
    }

    saveFood(): void{
      this.router.navigate(['connexion','food']);
    }

    savePlace(): void{
      this.router.navigate(['connexion','place']);
    }

    public deconno(): void {
      this.authService.deconnexion();
    }
}
