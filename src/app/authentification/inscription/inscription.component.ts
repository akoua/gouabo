import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  public inscriptionForm: FormGroup;
  public valeur : string;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.inscriptionForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required ],
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
      //console.log('passwordMatch', this.inscriptionForm.get('password').value, '\n', formControl.value );
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


  inscription(){
    console.log('Form', this.inscriptionForm);
  }

  inscriptionAuth(){

  }

}
