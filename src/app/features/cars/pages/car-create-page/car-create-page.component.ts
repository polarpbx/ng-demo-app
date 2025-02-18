import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CarItemComponent } from '@features/cars/components/car-item/car-item.component';
import { CarInterface } from '@models/CarInterface';
import { setCar } from '@store/cars/cars.actions';

@Component({
  imports: [
    CarItemComponent
  ],
  templateUrl: './car-create-page.component.html',
  styleUrl: './car-create-page.component.scss'
})
export class CarCreatePageComponent {
  private router = inject(Router);
  private store = inject(Store);

  redirectToList() {
    this.router.navigate(["cars", "list"]);
  }

  saveCar(car: CarInterface) {
    this.store.dispatch(setCar({ car }));
    this.router.navigate(["cars", "list"]);
  }

}
