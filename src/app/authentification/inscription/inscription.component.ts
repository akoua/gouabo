import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/shared/store';
import * as AuthAction from "../../shared/store/actions/auth.action";
import { Observable } from 'rxjs';
import * as AuthSelectors from "../../shared/store/selectors/auth.selectors"

interface Value{
  username: string;
  email: string;
  password:string;  
}

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  public inscriptionForm: FormGroup;
  public valeur : string; 
  private err$: Observable<string>;
  private succes$: Observable<string>;
  private success: boolean = false;


  constructor(
    private fb:FormBuilder,
    private store: Store<State>
  ) { }

  ngOnInit() {
    console.log("ngOnit inscription");
    this.createForm();
    this.err$ =  this.store.pipe(
      select(AuthSelectors.errorAuthSelector)
    );    
    this.succes$ = this.store.pipe(      
      select(AuthSelectors.succesAuthSelector),         
    );
  }

  createForm(){
    this.inscriptionForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required, this.passwordMatch.bind(this)]]
    })
  }

  /**
   * 
   * @param formControl ici nous verifions que les mots de passe sont pareil 
   * sinon on affiche 
   */
  passwordMatch(formControl: FormControl): {[s: string]: boolean} {    
    
    if (this.inscriptionForm != null ) {
            
      if (formControl.value != this.inscriptionForm.get('password').value ) {             
        return {noMatch: true};
      } else {
        //console.log('passwordMatch', this.inscriptionForm.get('password').value === formControl.value );                
        return null;
      }      
    }    
  }

/*   passwordDifficulty(formControl: FormControl): {[s:string]: boolean} {    
    if (this.inscriptionForm != null ){
      this.valeur  = formControl.value;
      this.valeur.match("(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})")
      
    }
  } */


  inscription(): void{
    
   // this.valueControls = this.inscriptionForm.value;
    console.log('Form', this.inscriptionForm);    
    if (this.inscriptionForm.status.toLowerCase() != "invalid") {
      this.store.dispatch(new AuthAction.TrySignup(this.inscriptionForm.value));
      this.success = true;
      this.inscriptionForm.reset();      
    }
    
  }

  inscriptionAuth(){

  }

}
