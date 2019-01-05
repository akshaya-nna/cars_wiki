import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailsFormComponent } from './car-details-form.component';

describe('CarDetailsFormComponent', () => {
  let component: CarDetailsFormComponent;
  let fixture: ComponentFixture<CarDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
