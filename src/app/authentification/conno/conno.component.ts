import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-conno',
  templateUrl: './conno.component.html',
  styleUrls: ['./conno.component.css']
})
export class ConnoComponent implements OnInit {

  inscriptionForm: FormGroup;
  
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }
  
  createForm(){
    this.inscriptionForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.email, Validators.required],
      password: ['', Validators.required]
    })
  }

}
