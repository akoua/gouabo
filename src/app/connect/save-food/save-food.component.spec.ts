import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveFoodComponent } from './save-food.component';

describe('SaveFoodComponent', () => {
  let component: SaveFoodComponent;
  let fixture: ComponentFixture<SaveFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
