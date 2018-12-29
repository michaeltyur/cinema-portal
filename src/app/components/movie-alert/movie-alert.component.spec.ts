import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieAlertComponent } from './movie-alert.component';

describe('MovieAlertComponent', () => {
  let component: MovieAlertComponent;
  let fixture: ComponentFixture<MovieAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
