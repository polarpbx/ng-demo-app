import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCreatePageComponent } from './car-create-page.component';

describe('CarCreatePageComponent', () => {
  let component: CarCreatePageComponent;
  let fixture: ComponentFixture<CarCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarCreatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
