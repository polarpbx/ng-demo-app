import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CarInterface } from '@models/CarInterface';
import { Store, select } from '@ngrx/store';
import { getCar } from '@store/cars/cars.actions';
import { carsSelector } from '@store/cars/cars.selectors';
import { map } from 'rxjs';

@Component({
  imports: [],
  templateUrl: './car-detail-page.component.html',
  styleUrl: './car-detail-page.component.scss'
})
export class CarDetailPageComponent {
  private route = inject(ActivatedRoute);
  private store = inject(Store);

  id = this.route.snapshot.paramMap.get('id');
  car = toSignal<CarInterface | undefined>(this.store.select(carsSelector).pipe(map((cars) => cars.find((car) => car.id === this.id))));

  constructor() {
    if (this.id) {
      this.store.dispatch(getCar({ id: this.id }));
    }
  }
}
