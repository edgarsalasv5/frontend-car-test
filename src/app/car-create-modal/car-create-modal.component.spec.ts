import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCreateModalComponent } from './car-create-modal.component';

describe('CarCreateModalComponent', () => {
  let component: CarCreateModalComponent;
  let fixture: ComponentFixture<CarCreateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarCreateModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
