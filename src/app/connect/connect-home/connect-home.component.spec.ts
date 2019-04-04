import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectHomeComponent } from './connect-home.component';

describe('ConnectHomeComponent', () => {
  let component: ConnectHomeComponent;
  let fixture: ComponentFixture<ConnectHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
