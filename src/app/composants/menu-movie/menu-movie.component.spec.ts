import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMovieComponent } from './menu-movie.component';

describe('MenuMovieComponent', () => {
  let component: MenuMovieComponent;
  let fixture: ComponentFixture<MenuMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
