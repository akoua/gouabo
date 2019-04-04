import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-connect-home',
  templateUrl: './connect-home.component.html',
  styleUrls: ['./connect-home.component.css']
})
export class ConnectHomeComponent implements OnInit {

  private route: string;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
      
   /*  this.activatedRoute.params.subscribe ((x: Observable<Params>) => {
      this.route = x['type'];
      this.router.navigate(['connexion/place']);
      console.log(x['type']);
    })  */   
  }

  naviguer(): void {
    console.log('\n\txrr', this.router);
    this.router.navigate(['connexion/food']);
  }
  
}
