import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {startWith, map} from 'rxjs/operators' ;

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  public searchForm: FormGroup;
  public villes: string[] = [
    "Abidjan",
    "Yamoussoukro",
    "Man",
    "Abatta",
    
  ]

  public filterVilles: Observable<string[]>;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();

    this.villes.sort( (a,b) => {
      return a.localeCompare(b);
    });

    this.filterVilles =  this.searchForm.get('ville').valueChanges
      .pipe(
        startWith(null),
        map(val => {
          if(!val){
            return this.villes
          }else{
            return this.villes.filter( filtre => {
              return filtre.toLowerCase().startsWith(val.toLowerCase());
            })
          }
        })
      )
  }

  createForm(){
    this.searchForm = this.fb.group({
      plat: ['', Validators.required],
      categorie: ['', Validators.required],
      pays:['', Validators.required],
      ville:['', Validators.required],

    })
  }

  valider(){
    console.log(this.searchForm)
  }

  erasable(): void{
    console.log(this.searchForm.get('plat').value);
    this.searchForm.get('plat').setValue('');
  }

}
