import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { OtherService } from '../../shared/services/other.service';
import { Pays } from '../../shared/models/pays.model';
import { Observable } from 'rxjs';
import { startWith, map, tap } from 'rxjs/operators';
import { AngularFirestore } from "@angular/fire/firestore";
import { Store } from '@ngrx/store';
import { State } from 'src/app/shared/store';
import * as platAction from "../../shared/store/actions/plat.action"
import { Plat } from 'src/app/shared/models/plat.model';
import { Ingredient } from 'src/app/shared/models/ingredient.model';

interface Value{
  nom: string;  
  ingredients:Ingredient[];
  photo: string,
  video: string,
  pays: string, 
  timeCuisson: number,  
  unityCuisson: string,    
  description: string,     
  ethnies:string
}

@Component({
  selector: 'app-save-food',
  templateUrl: './save-food.component.html',
  styleUrls: ['./save-food.component.css']
})
export class SaveFoodComponent implements OnInit {

  public saveFoodForm: FormGroup;
  private plat = Plat;
  private valueControls:Value;
  public listPays: Pays[] = [] ;
  public listCountry: string[] = [];
  //public listEthnies: {[s: string] : string[]}[] = [{}];
  public listEthnies: string[] = [];
  public listEthnies2: string[] = [];
  public listCountryFiltered: Observable<string[]>;
  public listEthniesFiltered: Observable<string[]>;
  s:string ="";
 
  constructor(
    private fb: FormBuilder,
    private otherService: OtherService,
    private db: AngularFirestore,
    private store: Store<State>
  ) { }

  ngOnInit() {    
    this.otherService.searchAllTown().subscribe( (x: Pays[])=>{            
      this.listPays = x;            
      this.listPays.forEach( (x: Pays, index) => {      
        this.listCountry.push(x.pays);
        this.listEthnies[x.pays.toLowerCase()] = x.ethnies;    
        //this.listEthnies2.push(x.ethnies);    
        //console.log(index, this.listEthnies);
      });    
    });
    this.createForm();

    //console.log(this.listCountry);

    this.listCountry.sort((a:string, b:string) =>{
      return a.localeCompare(b);
    });    
    this.listEthnies.sort((a:string, b:string) =>{
      return a.localeCompare(b);
    });   

    this.listCountryFiltered = this.saveFoodForm.get('pays').valueChanges
      .pipe(
        startWith(null),
        map( val => {                      
          if (!val) {            
           // console.log('touched', this.s);
            this.s = this.saveFoodForm.get('pays').value.toLowerCase();    
            return this.listCountry;
          } else {
            return this.listCountry.filter( filtre => {
              this.s = this.saveFoodForm.get('pays').value.toLowerCase();     
             // console.log('touched', this.s);       
              this.saveFoodForm.get('ethnies').reset();                  
              return filtre.toLowerCase().startsWith(val.toLowerCase());
            }
            );
          }
        })
      );

      this.listEthniesFiltered = this.saveFoodForm.get('ethnies').valueChanges
        .pipe(                  
          startWith(null), 
          map( val => {
            if(!val) {                              
               if (this.s) {
                return this.listEthnies[this.s]
              } else{
                return null;
              }     
                           
            }else{
              return this.listEthnies[this.s].filter( filtre => {    
              //  console.log('touchedd',this.listEthnies[this.s]);           
                return filtre.toLowerCase().startsWith(val.toLowerCase());
              })
            }
          })
        );        

  }

  createForm() : void {
    this.saveFoodForm = this.fb.group( {
      nom:['',[]],
      photo: ['', [Validators.required]],
      video: ['', [Validators.required]],
      pays: ['', [Validators.required]], 
      timeCuisson: ['', [Validators.required]],
      unityCuisson: ['min'],      
      description: ['', [Validators.required]],     
      ethnies: ['', []],
      ingredients: this.fb.array([])
    })
  }

  addIngredient(): void {    
    (<FormArray>this.saveFoodForm.get('ingredients')).push(this.fb.group({
      name:['', Validators.required],
      quantity:[''],
      unity:['g']      
    }));    
  }

  deleteIngredient(nb: number): void {
    console.log("deleteIngredient:", nb);
    (<FormArray>this.saveFoodForm.get('ingredients')).removeAt(nb);
  }

  saveFood(): void{
    console.log(this.saveFoodForm.value);
    this.valueControls = this.saveFoodForm.value;
    console.log(this.valueControls.nom, "\n", this.valueControls.pays, "\n", this.valueControls.ingredients);
    //this.plat = new Plat(this.valueControls.nom, this.valueControls.pays, this.valueControls.ingredients);
    this.store.dispatch(new platAction.PlatCreate(new Plat(this.valueControls.nom, this.valueControls.pays, this.valueControls.ingredients)));    
  }
}
