import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { CarInterface } from '@models/CarInterface';
import { AppState } from '@stateTypes/AppState';
import { carsSelector } from '@store/cars/cars.selectors';
import { getCars } from '@store/cars/cars.actions'

@Component({
  imports: [],
  templateUrl: './cars-page.component.html',
  styleUrl: './cars-page.component.scss'
})
export class CarsPageComponent implements OnInit {
  private router = inject(Router);
  private store = inject(Store<AppState>);
  cars = toSignal<CarInterface[]>(this.store.select(carsSelector));

  ngOnInit() {
    this.store.dispatch(getCars());
  }

}
