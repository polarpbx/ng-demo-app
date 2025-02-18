import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@stateTypes/AppState';
import { deleteCar, getCars } from '@store/cars/cars.actions'

import { CarListComponent } from '@features/cars/components/car-list/car-list.component';
import { CarInterface } from '@models/CarInterface';

@Component({
  imports: [
    CarListComponent
  ],
  templateUrl: './cars-page.component.html',
  styleUrl: './cars-page.component.scss'
})
export class CarsPageComponent implements OnInit {
  private router = inject(Router);
  private store = inject(Store<AppState>);

  ngOnInit() {
    this.store.dispatch(getCars());
  }

  addCar() {
    this.router.navigate(["cars", "create"]);
  }

  editCar(car: CarInterface) {
    this.router.navigate(["cars", "details", car.id]);
  }

  deleteCar(car: CarInterface) {
    this.store.dispatch(deleteCar({ car }));
  }

}
