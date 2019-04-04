import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthentificationService } from '../../shared/services/authentification.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  public connexionForm: FormGroup;

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private authenService: AuthentificationService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.connexionForm = this.fb.group({
      username: ['', Validators.required],      
      password: ['', Validators.required],      
    })
  }

  conno(): boolean{
    return  this.authenService.connexion();   
  }

  connexionAuth(): boolean{
    return null;
  }

}
