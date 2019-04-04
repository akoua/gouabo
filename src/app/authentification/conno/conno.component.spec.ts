import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnoComponent } from './conno.component';

describe('ConnoComponent', () => {
  let component: ConnoComponent;
  let fixture: ComponentFixture<ConnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
