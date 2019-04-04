import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-save-food',
  templateUrl: './save-food.component.html',
  styleUrls: ['./save-food.component.css']
})
export class SaveFoodComponent implements OnInit {

  public saveFoodForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() : void {
    this.saveFoodForm = this.fb.group( {
      'nom':['',[]],
      'pays': ['', []],
      'timeCuisson': ['', []],      
      'description': ['', []],     
      'ethnies': this.fb.array([]),
      'ingredients': this.fb.array([])
    })
  }

  saveFood(): void{
    
  }
}
