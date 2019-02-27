import { Component, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {  
  
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      tap(rsl => console.log(rsl))
    );

    public onSidenavClose = () => {
      //this.sidenavClose.emit();
    }

  constructor(private breakpointObserver: BreakpointObserver) {}

}
